"use client";

import { usePathname } from "next/navigation";

export const useURLPath = () => {
  const pathname = usePathname();
  const segments = ("home" + pathname).split("/");

  return { pathname, segments };
};
