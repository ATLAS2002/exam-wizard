"use client";

import { SessionProvider } from "next-auth/react";
import type { FCProps } from "~/types";

const AuthProvider: FCProps = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
