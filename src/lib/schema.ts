import * as z from "zod";
import { RoleType } from "~/types";

export const formSchema = z.object({
  role: z.nativeEnum(RoleType),
  name: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters",
    })
    .max(25, {
      message: "Name can be at most 25 characters",
    })
    .refine(
      (name) => /^[a-zA-Z\s]+$/.test(name),
      "Name can not have numbers or special characters",
    )
    .transform((name) => name.replace(/\s{2,}/g, " ")),
  email: z.string().email({
    message: "Not a valid email address",
  }),
});

export type FormSchema = z.infer<typeof formSchema>;
