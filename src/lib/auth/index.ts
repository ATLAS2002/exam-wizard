import { getServerSession, type AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";

import { env } from "~/env";
import {
  getEmailUserConfig,
  getGoogleUserConfig,
  getLinkedinUserConfig,
} from "../configs";
import ConvexAdapter from "./convexAdapter";

export const options: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/auth",
  // },
  session: {
    strategy: "jwt",
  },
  adapter: ConvexAdapter(),
  providers: [
    EmailProvider(getEmailUserConfig()),
    GoogleProvider(getGoogleUserConfig()),
    LinkedinProvider(getLinkedinUserConfig()),
  ],
  // callbacks: {
  //   jwt: ({ token, user }) => {
  //     if (user) {
  //       token.role = user.role;
  //       token.college = user.college;
  //     }
  //     return token;
  //   },
  //   session: ({ session, token }) => {
  //     session.user.role = token.role;
  //     session.user.college = token.college;

  //     return session;
  //   },
  // },
};

export const getCurrentUser = async () => {
  const session = await getServerSession(options);
  return session?.user;
};
