"use client";

import { signOut } from "next-auth/react";
import type { User } from "next-auth";
import { ProfilePicture } from "./ui/avatar";
import type { FCProps } from "~/types";
import { getInitials } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  CircleUserRound,
  LogOut,
  Settings,
  Bell,
  ChevronDown,
  Building,
  BadgeCheck,
} from "lucide-react";
import { Badge } from "./ui/badge";

export const Header: FCProps<{
  user: User;
}> = ({ user: { name, role, image } }) => {
  return (
    <header className="flex h-20 w-full flex-row-reverse items-center pr-2 shadow-lg">
      <DropdownMenu>
        <DropdownMenuTrigger className="no-border group" asChild>
          <button className="flex w-fit rounded-lg px-4 py-2 transition hover:bg-stone-300 group-focus-visible:bg-stone-300 motion-safe:duration-300">
            <ProfilePicture
              src={image}
              fallback={getInitials(name)}
              className="mr-2 bg-white bg-opacity-20"
            />
            <div className="mx-2 flex h-full flex-col items-start text-stone-800">
              <h1 className="font-xl font-regular text-stone-600">{name}</h1>
              <div className="flex w-full justify-between">
                <div className="flex gap-2">
                  <Badge variant={role} className="h-full">
                    {role}
                  </Badge>
                  <BadgeCheck className="text-lime-600" />
                </div>
                <ChevronDown className="scale-90 pb-1" />
              </div>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit min-w-56 border-0 bg-black bg-opacity-20 px-2 font-regular backdrop-blur-sm selection:bg-stone-200">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex gap-2 text-stone-600 hover:bg-stone-200 hover:text-stone-700">
              <CircleUserRound />
              <span>profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 text-stone-600 hover:bg-stone-200 hover:text-stone-700">
              <Building />
              <span>college</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 text-stone-600 hover:bg-stone-200 hover:text-stone-700">
              <Settings />
              <span>setttings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="h-[1px] bg-stone-400" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex gap-2 text-red-500 hover:bg-stone-200 hover:text-red-600">
              <LogOut />
              <button onClick={() => signOut()}>Log out</button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="mx-2 h-12 w-12 rounded-md p-2">
        <Bell className="h-full w-full scale-90 text-stone-600 transition hover:rotate-12 hover:scale-100 motion-safe:duration-300" />
      </div>
    </header>
  );
};
