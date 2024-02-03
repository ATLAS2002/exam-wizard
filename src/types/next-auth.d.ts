import type { RoleType } from "~/types";

declare module "next-auth" {
  interface User {
    role: RoleType;
    id: string;
    name: string;
    email: string;
    image: string | undefined;
    role: RoleType;
    college: string | undefined;
  }
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string | undefined;
      role: RoleType;
      college: string | undefined;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    image: string | undefined;
    role: RoleType;
    college: string | undefined;
  }
}
