"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function useQueryParams(debounceTime = 300) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setQueryParams = useDebouncedCallback(
    (field: string, value: unknown) => {
      const params = new URLSearchParams(searchParams);
      params.set(field, JSON.stringify(value));

      router.replace(`${pathname}?${params.toString()}`);
    },
    debounceTime,
  );

  return {
    setQueryParams,
  };
}
