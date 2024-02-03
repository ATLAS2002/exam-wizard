import type { AdapterUser, AdapterAccount } from "next-auth/adapters";
import type { Doc, Id } from "convex/_generated/dataModel";
import type { WithoutSystemFields } from "convex/server";
import type { RoleType } from "~/types";

type Prettify<T> = {
  [K in keyof T]: T[K];
} & NonNullable<unknown>;

class AuthDTO {
  getUser(userDoc: Doc<"user">): AdapterUser {
    return {
      id: userDoc._id as Id<"user">,
      name: userDoc.name,
      email: userDoc.email,
      emailVerified: !!userDoc.emailVerified
        ? new Date(userDoc.emailVerified)
        : null,
      image: userDoc.image,
      role: userDoc.role as RoleType,
      college: userDoc.college,
    };
  }
}

export const dto = new AuthDTO();

type AdapterSpecificFields = Omit<
  Partial<WithoutSystemFields<Doc<"user">>>,
  "role" | "college"
>;
interface PartialUserDoc extends AdapterSpecificFields {
  id: Id<"user">;
}

type PartialUserDTO = Partial<AdapterUser> & Pick<AdapterUser, "id">;

class ConvexDocument {
  getUser(userDTO: Omit<AdapterUser, "id">): WithoutSystemFields<Doc<"user">> {
    return {
      name: userDTO.name ?? userDTO.email,
      email: userDTO.email,
      emailVerified: !!userDTO.emailVerified
        ? String(userDTO.emailVerified)
        : undefined,
      image: userDTO.image ?? undefined,
      role: "admin",
      college: undefined,
    };
  }

  getPartialUserData({
    id: _id,
    name,
    image,
    email,
    emailVerified,
  }: PartialUserDTO): Prettify<PartialUserDoc> {
    const userDoc: PartialUserDoc = {
      id: _id as Id<"user">,
    };
    if (!!name) userDoc.name = name;
    if (!!image) userDoc.image = image;
    if (!!email) userDoc.email = email;
    if (!!emailVerified) userDoc.emailVerified = emailVerified.toISOString();

    return userDoc;
  }

  getAccount(accountDTO: AdapterAccount): WithoutSystemFields<Doc<"account">> {
    return {
      userId: accountDTO.userId as Id<"user">,
      type: accountDTO.type,
      provider: accountDTO.provider,
      providerAccountId: accountDTO.providerAccountId,
      refreshToken: accountDTO.refresh_token,
      accessToken: accountDTO.access_token,
      expiresAt: accountDTO.expires_at,
      tokenType: accountDTO.token_type,
      scope: accountDTO.scope,
      idToken: accountDTO.id_token,
      sessionState: accountDTO.session_state,
    };
  }
}

export const doc = new ConvexDocument();
