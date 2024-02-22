"use client";

import { Medal, Plus, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRoleData } from "~/hooks/consumer";
import type { FCProps } from "~/types";

export const Header: FCProps = () => {
  const { query, handleQueryChange } = useRoleData();

  return (
    <div className="flex justify-between gap-4">
      <Button
        href="/roles/create"
        variant="spring"
        className="border-green-800 bg-jungle p-6 hover:bg-jungle"
      >
        <Plus className="mr-3" />
        Create Role
      </Button>
      <Button
        variant="spring"
        className="border-lime-700 bg-olive p-6 hover:bg-olive"
      >
        <Medal className="mr-3" />
        Assign Roles
      </Button>
      <Input
        id="search-input"
        autoFocus
        value={query}
        onChange={handleQueryChange}
        placeholder="Type the role here..."
        className="bg-aegean-100 pb-6 pl-4 pr-14 pt-7 font-regular text-2xl text-aegean-700 caret-aegean-700 shadow-inner selection:bg-stone-600 selection:text-stone-300 placeholder:text-aegean placeholder:opacity-75"
      >
        <Search className="mx-5 my-3 scale-150 text-white" />
      </Input>
      <Button
        variant="spring"
        className="border-blue-900 bg-indigo-400 p-6 hover:bg-indigo-400"
      >
        <SlidersHorizontal className="mr-3" />
        Filter Roles
      </Button>
    </div>
  );
};
