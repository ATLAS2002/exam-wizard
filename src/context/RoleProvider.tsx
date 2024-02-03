"use client";

import { type FC, type ReactNode, createContext, useState } from "react";

export interface RoleContextProps {
  active: number;
  lastTouched: number;
  changeRole: (index: number) => void;
}

export const RoleContext = createContext<RoleContextProps | null>(null);

export const RoleProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
