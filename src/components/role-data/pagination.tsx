import {
  BookOpen,
  BookOpenText,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpIcon,
} from "lucide-react";
import type { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const currentPageIndex = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  return (
    <div className="mt-4 flex items-center justify-between px-2 selection:bg-transparent">
      {totalPages ? (
        <div className="flex w-fit items-center justify-center gap-2 font-regular font-bold text-stone-400 selection:text-stone-600">
          <BookOpenText />
          Page {currentPageIndex} of {totalPages}
        </div>
      ) : (
        <div className="flex w-fit items-center justify-center gap-2 font-regular font-bold text-indian-300 selection:text-stone-600">
          <BookOpen />0 Pages found!
        </div>
      )}
      <div className="flex items-center space-x-2">
        <Button
          variant="default"
          className="hidden h-8 w-12 bg-stone-400 p-0 text-stone-700 transition hover:scale-110 hover:bg-stone-400 hover:opacity-80  motion-safe:duration-300 lg:flex"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsUpIcon className="h-4 w-4 -rotate-90" />
        </Button>
        <Button
          variant="default"
          className="h-8 w-16 bg-stone-400 p-0 text-stone-700 transition hover:scale-110 hover:bg-stone-400 hover:opacity-80  motion-safe:duration-300"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="default"
          className="h-8 w-16 bg-stone-400 p-0 text-stone-700 transition hover:scale-110 hover:bg-stone-400 hover:opacity-80  motion-safe:duration-300"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="default"
          className="hidden h-8 w-12 bg-stone-400 p-0 text-stone-700 transition hover:scale-110 hover:bg-stone-400 hover:opacity-80  motion-safe:duration-300 lg:flex"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsUpIcon className="h-4 w-4 rotate-90" />
        </Button>
      </div>
    </div>
  );
}
