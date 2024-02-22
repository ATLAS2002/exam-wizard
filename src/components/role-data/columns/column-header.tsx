import { InfoIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import type { FCProps } from "~/types";

export const ColumnHeader: FCProps<{ info?: ReactNode }> = ({
  children,
  className,
  info,
}) => {
  return (
    <h1
      className={cn(
        "group flex w-fit gap-2 pl-4 font-regular text-xl text-stone-600",
        className,
      )}
    >
      <span>
        {children}
        <Separator className="w-full scale-x-0 bg-stone-600 transition-all group-hover:scale-x-100 motion-safe:duration-300" />
      </span>
      {info && (
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer">
            <InfoIcon />
          </HoverCardTrigger>
          <HoverCardContent className="w-fit max-w-80 text-balance text-stone-500">
            {info}
          </HoverCardContent>
        </HoverCard>
      )}
    </h1>
  );
};
