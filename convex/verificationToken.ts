import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { verificationTokenSchema } from "./schema";

export const create = mutation({
  args: verificationTokenSchema,
  handler: async ({ db }, args) => {
    const tokenId = await db.insert("verificationToken", args);
    return tokenId;
  },
});

export const getByIdToken = query({
  args: {
    token: v.string(),
    identifier: v.string(),
  },
  handler: async ({ db }, { token, identifier }) => {
    const verificationToken = await db
      .query("verificationToken")
      .withIndex("by_token_identifier", (q) =>
        q.eq("token", token).eq("identifier", identifier),
      )
      .unique();
    if (!verificationToken) return null;
    return verificationToken;
  },
});

export const remove = mutation({
  args: {
    id: v.id("verificationToken"),
  },
  handler: async ({ db }, { id }) => {
    await db.delete(id);
  },
});
