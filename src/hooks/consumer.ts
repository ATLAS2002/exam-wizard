import { useContext } from "react";

import { RoleContext } from "~/context/RoleProvider";
import { ProfileContext } from "~/context/ProfileProvider";
import { RoleDataContext } from "~/context/RoleDataProvider";

export const useRole = () => {
  return useContext(RoleContext)!;
};

export const useProfile = () => {
  return useContext(ProfileContext)!;
};

export const useRoleData = () => {
  return useContext(RoleDataContext)!;
};
