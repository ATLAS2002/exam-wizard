"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useRoleData } from "~/hooks/consumer";
import { useEffect, useState } from "react";
import { DataTablePagination } from "./pagination";
import { parseAsInteger, useQueryState } from "nuqs";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const styles: Record<string, string> = {
  name: "lg:w-48",
  assignees: "w-64",
  permissions: "",
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { query } = useRoleData();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageIndex: page - 1,
        pageSize: 6,
      },
    },
  });

  useEffect(() => {
    table.getColumn("name")?.setFilterValue(query);
  }, [table, query]);

  const currentPageIndex = table.getState().pagination.pageIndex;
  useEffect(() => {
    setPage(currentPageIndex + 1).catch((err) => {
      throw err;
    });
  }, [currentPageIndex, setPage]);

  return (
    <>
      <div className="h-[32rem] overflow-hidden rounded-md border-t-2 border-white bg-stone-200 shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
        <Table>
          <TableHeader className="border-b-2 border-stone-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="border-b border-stone-300 text-stone-500 transition hover:bg-stone-100 hover:text-stone-600 motion-safe:duration-300"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`${styles[cell.column.id]} p-2`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </>
  );
}
