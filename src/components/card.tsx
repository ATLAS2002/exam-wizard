import type { FCProps } from "~/types";
import { cn } from "~/lib/utils";
import { CalendarDays, ClipboardPenLine, Home, Rocket } from "lucide-react";

export const Cards = () => {
  return (
    <div className="flex h-1/4 gap-3 pb-6">
      <Card
        title="Roles"
        description="assign roles to faculty members."
        className="bg-aegean-500 text-aegean-500"
      >
        <Rocket className="scale-150" />
      </Card>
      <Card
        title="Events"
        description="set reminders for special events."
        className="bg-olive-400 text-olive-400"
      >
        <CalendarDays className="scale-150" />
      </Card>
      <Card
        title="Events"
        description="set reminders for special events."
        className="bg-indigo-400 text-indigo-400"
      >
        <Home className="scale-150" />
      </Card>
      <Card
        title="Exams"
        description="set reminders for special events."
        className="bg-indian-400 text-indian-400"
      >
        <ClipboardPenLine className="scale-150" />
      </Card>
    </div>
  );
};

export const Card: FCProps<{ title: string; description: string }> = ({
  children,
  className,
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "flex h-full w-1/4 items-center gap-4 rounded-lg px-4 opacity-60 transition hover:scale-105 motion-safe:duration-300",
        className,
      )}
    >
      <div className="my-auto flex aspect-square w-1/3 items-center justify-center rounded-full bg-white">
        {children}
      </div>
      <div className="h-fit w-2/3 font-black text-white">
        <h1 className="font-regular text-3xl">{title}</h1>
        <p className="font-code text-sm text-white text-opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
};
