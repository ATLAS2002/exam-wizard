import type { Adapter } from "next-auth/adapters";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { fetchQuery, fetchMutation, fetchAction } from "convex/nextjs";
import { dto, doc } from "../utils";

export default function ConvexAdapter(): Adapter {
  return {
    async createUser(userData) {
      const userId = await fetchMutation(
        api.user.create,
        doc.getUser(userData),
      );
      return {
        ...userData,
        id: userId,
      };
    },
    async getUser(id) {
      const userId = id as Id<"user">;
      const user = await fetchQuery(api.user.get, { id: userId });

      if (!user) return null;
      return dto.getUser(user);
    },
    async getUserByEmail(email) {
      const user = await fetchQuery(api.user.getByEmail, { email });

      if (!user) return null;
      return dto.getUser(user);
    },
    async getUserByAccount(providerData) {
      const user = await fetchQuery(api.user.getByAccount, providerData);

      if (!user) return null;
      return dto.getUser(user);
    },
    async updateUser(userData) {
      const user = await fetchMutation(
        api.user.update,
        doc.getPartialUserData(userData),
      );

      return dto.getUser(user);
    },
    async deleteUser(userId) {
      const id = userId as Id<"user">;
      await fetchMutation(api.user.remove, { id });
    },
    async linkAccount(account) {
      try {
        await fetchMutation(api.account.link, doc.getAccount(account));
        return account;
      } catch {
        throw new Error("Failed to create account");
      }
    },
    async unlinkAccount(providerData) {
      try {
        await fetchAction(api.account.unlink, providerData);
      } catch {
        throw new Error("Failed to delete account");
      }
    },
    async createSession(sessionData) {
      await fetchMutation(api.session.create, {
        userId: sessionData.userId as Id<"user">,
        expires: sessionData.expires.toISOString(),
        sessionToken: sessionData.sessionToken,
      });

      return sessionData;
    },
    async getSessionAndUser(sessionToken) {
      const data = await fetchQuery(api.user.getBySession, { sessionToken });
      if (!data?.user || !data?.session) return null;

      return {
        user: dto.getUser(data.user),
        session: {
          userId: data.session.userId as string,
          expires: new Date(data.session.expires),
          sessionToken,
        },
      };
    },
    // async updateSession({ sessionToken }) {
    //   return;
    // },
    // async deleteSession(sessionToken) {
    //   return;
    // },
    async createVerificationToken(token) {
      console.log("Creating token...");
      await fetchMutation(api.verificationToken.create, {
        ...token,
        expires: token.expires.toISOString(),
      });
      return token;
    },
    async useVerificationToken(tokenData) {
      console.log("Verifying token...");
      const verificationToken = await fetchQuery(
        api.verificationToken.getByIdToken,
        tokenData,
      );

      if (!verificationToken?._id) throw new Error("Could not use token");
      await fetchMutation(api.verificationToken.remove, {
        id: verificationToken._id,
      });
      return {
        token: verificationToken.token,
        identifier: verificationToken.identifier,
        expires: new Date(verificationToken.expires),
      };
    },
  };
}
