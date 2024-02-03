import { v } from "convex/values";
import {
  internalQuery,
  mutation,
  action,
  internalMutation,
} from "./_generated/server";
import { accountSchema } from "./schema";
import { internal } from "./_generated/api";

export const link = mutation({
  args: accountSchema,
  handler: async ({ db }, args) => {
    const accountId = await db.insert("account", args);
    return accountId;
  },
});

export const getId = internalQuery({
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

    return account?._id;
  },
});

export const remove = internalMutation({
  args: {
    id: v.id("account"),
  },
  handler: async ({ db }, { id }) => {
    await db.delete(id);
  },
});

export const unlink = action({
  args: {
    provider: v.string(),
    providerAccountId: v.string(),
  },
  handler: async ({ runQuery, runMutation }, args) => {
    const id = await runQuery(internal.account.getId, args);
    if (!id) return null;

    await runMutation(internal.account.remove, { id });
  },
});
