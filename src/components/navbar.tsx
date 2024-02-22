"use client";

import Link from "next/link";
import Image from "next/image";

import { Icon } from "./ui/icons";
import { Separator } from "./ui/separator";
import { AspectRatio } from "./ui/aspect-ratio";

import { useURLPath } from "~/hooks/url";
import { cn } from "~/lib/utils";
import type { FCProps } from "~/types";

const linkStyles = {
  default: "flex gap-2 rounded-lg p-3 pr-8 text-stone-500",
  active: "bg-aegean-400 w-full text-white",
  inactive: "hover:bg-aegean-100 w-fit hover:text-aegean-400",
};

export const NavBar = () => {
  const { segments } = useURLPath();

  return (
    <nav className="h-full w-1/5 shadow-[0_-2px_15px_rgba(0,0,0,0.3)]">
      <Link href={"/"} className="group relative h-fit">
        <div className="absolute mx-4 my-3 h-5/6 w-[calc(100%-2rem)] origin-[20%_50%] scale-75 rounded-xl bg-aegean-100 opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100 motion-safe:duration-300" />
        <AspectRatio ratio={2.3} className="relative -translate-x-4 scale-75">
          <Image src="/banner.png" fill alt="Exam Wizard" />
        </AspectRatio>
      </Link>
      <Separator className="mx-4 my-2 h-[2px] w-[calc(100%-2rem)] bg-aegean-500 opacity-40" />
      <Links active={segments[1]!} />
    </nav>
  );
};

const Links: FCProps<{ active: string }> = ({ active }) => {
  return (
    <section className="m-4 mt-6 flex min-h-20 flex-col gap-4 px-2 font-regular text-xl text-stone-500">
      <Link
        className={cn(
          linkStyles.default,
          active === "dashboard" ? linkStyles.active : linkStyles.inactive,
        )}
        href="/dashboard"
      >
        <Icon name="dashboard" />
        <h1>View Dashboard</h1>
      </Link>
      <Link
        className={cn(
          linkStyles.default,
          active === "roles" ? linkStyles.active : linkStyles.inactive,
        )}
        href="/roles"
      >
        <Icon name="roles" />
        <h1>Manage Roles</h1>
      </Link>
    </section>
  );
};
