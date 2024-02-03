import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export const userSchema = {
  name: v.string(),
  email: v.string(),
  role: v.union(v.literal("admin"), v.literal("faculty"), v.literal("student")),
  image: v.optional(v.string()),
  college: v.optional(v.string()),
  emailVerified: v.optional(v.string()),
};

export const accountSchema = {
  userId: v.id("user"),
  type: v.string(),
  provider: v.string(),
  providerAccountId: v.string(),
  refreshToken: v.optional(v.string()),
  accessToken: v.optional(v.string()),
  expiresAt: v.optional(v.number()),
  tokenType: v.optional(v.string()),
  scope: v.optional(v.string()),
  idToken: v.optional(v.string()),
  sessionState: v.optional(v.string()),
};

export const sessionSchema = {
  userId: v.id("user"),
  expires: v.string(),
  sessionToken: v.string(),
};

export const verificationTokenSchema = {
  identifier: v.string(),
  token: v.string(),
  expires: v.string(),
};

export default defineSchema({
  user: defineTable(userSchema).index("by_email", ["email"]),
  account: defineTable(accountSchema).index("by_provider_account", [
    "providerAccountId",
    "provider",
  ]),
  session: defineTable(sessionSchema).index("by_token", ["sessionToken"]),
  verificationToken: defineTable(verificationTokenSchema).index(
    "by_token_identifier",
    ["token", "identifier"],
  ),
});
