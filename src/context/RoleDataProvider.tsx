"use client";

import { useState, createContext, type ChangeEvent, useCallback } from "react";
import { useQueryState } from "nuqs";
import type { FCProps } from "~/types";

export interface RoleDataContextProps {
  query: string;
  handleQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RoleDataContext = createContext<RoleDataContextProps | null>(null);

export const RoleDataProvider: FCProps = ({ children }) => {
  const [queryParam, setQueryParam] = useQueryState("query", {
    throttleMs: 500,
    defaultValue: "",
  });
  const [query, setQuery] = useState<string>(queryParam);

  const handleQueryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
      setQueryParam(event.target.value).catch((err) => {
        throw err;
      });
    },
    [setQueryParam],
  );

  return (
    <RoleDataContext.Provider value={{ query, handleQueryChange }}>
      {children}
    </RoleDataContext.Provider>
  );
};
