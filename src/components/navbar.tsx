"use client";

import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Icon } from "./ui/icons";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="h-full w-1/5 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
      <AspectRatio ratio={2.3} className="relative -translate-x-4 scale-75">
        <Image src="/banner.png" fill alt="Exam Wizard" />
      </AspectRatio>
      <Separator className="mx-4 h-[2px] w-[calc(100%-2rem)] bg-aegean-500 opacity-40" />
      <section className="m-4 flex min-h-20 flex-col gap-4 px-2 font-regular text-xl text-stone-500">
        <Link
          className="bg-aegean-400 flex w-full gap-2 rounded-lg p-3 pr-8 text-white"
          href="/dashboard"
        >
          <Icon name="dashboard" />
          <h1>View Dashboard</h1>
        </Link>
        <Link
          className="hover:bg-aegean-100 hover:text-aegean-400 flex w-fit gap-2 rounded-lg p-3 pr-8 text-stone-500"
          href="/roles"
        >
          <Icon name="roles" />
          <h1>Manage Roles</h1>
        </Link>
      </section>
    </nav>
  );
};
