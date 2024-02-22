"use client";

import { createContext, useState } from "react";
import type { FCProps } from "~/types";

export interface RoleContextProps {
  active: number;
  lastTouched: number;
  changeRole: (index: number) => void;
}

export const RoleContext = createContext<RoleContextProps | null>(null);

export const RoleProvider: FCProps = ({ children }) => {
  const [active, setActive] = useState<number>(1);
  const [lastTouched, setLastTouched] = useState<number>(1);

  const changeRole = (index: number) => {
    if (active === index) {
      setActive(0);
    } else if (index !== 1) {
      setActive(index);
      setLastTouched(index);
    }
  };

  return (
    <RoleContext.Provider value={{ active, lastTouched, changeRole }}>
      {children}
    </RoleContext.Provider>
  );
};
