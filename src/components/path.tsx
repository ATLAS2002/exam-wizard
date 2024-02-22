"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { Icon } from "./ui/icons";
import { useURLPath } from "~/hooks/url";

export const Path = () => {
  const router = useRouter();
  const { segments, pathname } = useURLPath();

  const [showInput, setShowInput] = useState(false);

  return (
    <div
      onDoubleClick={() => setShowInput(!showInput)}
      className="flex h-12 w-full items-center bg-transparent pl-2"
    >
      {showInput ? (
        <input defaultValue={pathname} />
      ) : (
        segments.map((segment, index) => {
          const isActive = index === segments.length - 1;

          return (
            <div
              key={`path=${segment}`}
              className={`flex select-none items-center font-regular text-xl ${isActive ? "text-indigo-500" : "text-stone-600"}`}
            >
              {index > 0 && (
                <ChevronRight className="mx-2 h-full text-stone-600" />
              )}
              <button
                onClick={() => {
                  if (isActive) return;
                  const route = "/" + segments.splice(1, index).join("/");
                  router.replace(route);
                }}
                className="flex rounded-md p-2 transition hover:bg-stone-300 motion-safe:duration-300"
              >
                <Icon name={segment} />
                <h1 className="ml-1 lowercase">{segment}</h1>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};
