import NextAuth from "next-auth/next";

import { options as authOptions } from "~/lib/auth";
import type { NextRouteHandler } from "~/types";

const authHandler = NextAuth(authOptions) as NextRouteHandler;

export { authHandler as GET, authHandler as POST };
