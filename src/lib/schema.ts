import * as z from "zod";
import { RoleType } from "~/types";

export const authFormSchema = z.object({
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

export type AuthFormSchema = z.infer<typeof authFormSchema>;

export const roleFormSchema = z.object({
  name: z
    .string()
    .max(20, { message: "Name too long, try using an abbereviated version" })
    .min(2, { message: "Name is too short" }),
  description: z
    .string()
    .max(50, { message: "Description can not be too long" })
    .optional(),
  permissions: z.array(z.number()).min(1, { message: "Too less permissions!" }),
});

export type RoleFormSchema = z.infer<typeof roleFormSchema>;
