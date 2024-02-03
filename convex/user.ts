import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { userSchema } from "./schema";

export const get = query({
  args: {
    id: v.id("user"),
  },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});

export const getByEmail = query({
  args: {
    email: v.string(),
  },
  handler: async ({ db }, { email }) => {
    const user = await db
      .query("user")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();
    return user;
  },
});

export const getByAccount = query({
  args: {
    provider: v.string(),
    providerAccountId: v.string(),
  },
  handler: async ({ db }, { provider, providerAccountId }) => {
    const account = await db
      .query("account")
      .withIndex("by_provider_account", (q) =>
        q.eq("providerAccountId", providerAccountId).eq("provider", provider),
      )
      .unique();
    if (!account?.userId) return null;

    const user = await db.get(account.userId);
    return user;
  },
});

export const getBySession = query({
  args: {
    sessionToken: v.string(),
  },
  handler: async ({ db }, { sessionToken }) => {
    const session = await db
      .query("session")
      .withIndex("by_token", (q) => q.eq("sessionToken", sessionToken))
      .unique();
    if (!session?.userId) return null;

    const user = await db.get(session.userId);
    return { user, session };
  },
});

export const create = mutation({
  args: userSchema,
  handler: async ({ db }, args) => {
    const userId = await db.insert("user", args);
    return userId;
  },
});

export const update = mutation({
  args: {
    id: v.id("user"),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    role: v.optional(
      v.union(v.literal("admin"), v.literal("faculty"), v.literal("student")),
    ),
    image: v.optional(v.string()),
    college: v.optional(v.string()),
    emailVerified: v.optional(v.string()),
  },
  handler: async ({ db }, { id, ...args }) => {
    await db.patch(id, args);
    const user = await db.get(id);
    return user!;
  },
});

export const remove = mutation({
  args: {
    id: v.id("user"),
  },
  handler: async ({ db }, { id }) => {
    await db.delete(id);
  },
});
