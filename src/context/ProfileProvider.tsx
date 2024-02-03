"use client";

import {
  useReducer,
  createContext,
  type FC,
  type Dispatch,
  type ReactNode,
} from "react";
import { useQueryParams } from "~/hooks/search-params";
import { RoleType } from "~/types";

interface ProfileProps {
  role: RoleType;
  name: string;
  email: string;
}

export const defaultFieldValues = {
  role: RoleType.ADMIN,
  name: "",
  email: "",
} as const;

export const ProfileContext = createContext<{
  fields: ProfileProps;
  setFields: Dispatch<Partial<ProfileProps>>;
} | null>(null);

export const ProfileProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { setQueryParams } = useQueryParams();

  const [fields, setFields] = useReducer(
    (
      fields: ProfileProps,
      updatedFields: Partial<ProfileProps>,
    ): ProfileProps => {
      for (const field in updatedFields) {
        console.log(field);
      }
      return {
        ...fields,
        ...updatedFields,
      };
    },
    defaultFieldValues,
  );

  return (
    <ProfileContext.Provider value={{ fields, setFields }}>
      {children}
    </ProfileContext.Provider>
  );
};
