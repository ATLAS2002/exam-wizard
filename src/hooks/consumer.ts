import { useContext } from "react";

import { RoleContext } from "~/context/RoleProvider";
import { ProfileContext } from "~/context/ProfileProvider";

export const useRole = () => {
  return useContext(RoleContext)!;
};

export const useProfile = () => {
  return useContext(ProfileContext)!;
};
