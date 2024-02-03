import type { OAuthUserConfig } from "next-auth/providers/oauth";
import type { EmailUserConfig } from "next-auth/providers/email";
import type { GoogleProfile } from "next-auth/providers/google";
import type { LinkedInProfile } from "next-auth/providers/linkedin";

import { env } from "~/env.js";
import { RoleType } from "~/types";
import { resend } from "./resend";

interface UserData {
  id: string;
  name: string;
  email: string;
  image: string;
  role: RoleType;
  college: string | undefined;
}

export const getGoogleUserConfig = (): OAuthUserConfig<
  GoogleProfile & Partial<Pick<UserData, "college" | "role">>
> => ({
  clientId: env.GOOGLE_CLIENT_ID,
  clientSecret: env.GOOGLE_CLIENT_SECRET,
  profile: ({ sub: id, name, email, picture, role, college }): UserData => ({
    id,
    name,
    email,
    image: picture,
    role: role ?? RoleType.ADMIN,
    college,
  }),
});

export const getLinkedinUserConfig = (): OAuthUserConfig<LinkedInProfile> => ({
  clientId: env.LINKEDIN_CLIENT_ID,
  clientSecret: env.LINKEDIN_CLIENT_SECRET,
});

export const getEmailUserConfig = (): EmailUserConfig => ({
  sendVerificationRequest: async ({ identifier, url }) => {
    const { host } = new URL(url);

    const { error } = await resend.emails.send({
      from: env.EMAIL_DOMAIN,
      to: [identifier],
      subject: `Log in to ${host}`,
      text: `Sign up to ${host}\nClick here:${url}`,
    });

    if (error) {
      console.log("Failed to send verification email");
      throw error;
    }

    console.log("Sent verification email to", identifier);
  },
});
