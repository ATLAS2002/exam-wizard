"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { ColumnHeader } from "./column-header";
import { Assignees, type AssigneeProps } from "./assignees";
import { Name, type NameProps } from "./name";

export interface RoleProps {
  name: NameProps;
  permissions: string[];
  assignees: AssigneeProps[];
}

export const roleColumns: ColumnDef<RoleProps>[] = [
  {
    accessorKey: "name",
    filterFn: (row, _, query: string) => {
      return row.original.name.title
        .toLowerCase()
        .includes(query.toLowerCase());
    },
    header: () => <ColumnHeader>Name</ColumnHeader>,
    cell: ({ row }) => {
      const { title, description } = row.getValue<NameProps>("name");

      return (
        <Name index={row.index + 1} description={description}>
          {title}
        </Name>
      );
    },
  },
  {
    accessorKey: "assignees",
    header: () => (
      <ColumnHeader info="Those who are assigned">Assignees</ColumnHeader>
    ),
    cell: ({ row }) => {
      const assignees = row.getValue<AssigneeProps[]>("assignees");

      return <Assignees assignees={assignees} />;
    },
  },
  {
    accessorKey: "permissions",
    header: () => (
      <ColumnHeader info="Allowed permissions for this role">
        Permissions
      </ColumnHeader>
    ),
    cell: ({ row }) => {
      const permissions = row.getValue<string[]>("permissions");

      return (
        <ul className="flex h-12 max-w-[400px] -translate-y-1 flex-wrap gap-2">
          {permissions.slice(0, 5).map((permission, index) => (
            <li
              key={index}
              className="rounded-full bg-indian-300 px-2 py-1 font-code text-xs font-black text-indian ring-2 ring-indian-600"
            >
              {permission}
            </li>
          ))}
        </ul>
      );
    },
  },
];
