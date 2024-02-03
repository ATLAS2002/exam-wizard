import { mutation } from "./_generated/server";
import { sessionSchema } from "./schema";

export const create = mutation({
  args: sessionSchema,
  handler: async ({ db }, args) => {
    const sessionId = await db.insert("session", args);
    return sessionId;
  },
});
