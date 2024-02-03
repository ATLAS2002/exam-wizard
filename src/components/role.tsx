"use client";

import Image from "next/image";
import type { ButtonHTMLAttributes } from "react";

import { SmartButton } from "./ui/button";
import { Separator } from "./ui/separator";
import { ProfileForm } from "./form.profile";
import { breakWords, cn } from "~/lib/utils";
import { useRole } from "~/hooks/consumer";
import { type FCProps, RoleType } from "~/types";

interface RoleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  title: string;
  index: number;
}

const twStyles = {
  base: "h-1/2 w-1/2 relative flex group cursor-pointer font-mono text-xl font-bold text-white select-none transition-[width scale] ease-in-out duration-300 lg:h-full lg:w-1/4 lg:scale-100",
  active: "lg:text-3xl scale-[2] lg:w-1/2",
  minimized: {
    container:
      "flex h-full w-full flex-col items-center justify-center gap-4 p-4",
    icon: "relative aspect-square w-1/3 transition group-hover:scale-110 min-w-20",
    text: "text-3xl font-mono text-white opacity-60 transition-opacity duration-300 group-hover:opacity-100",
  },
  utils: {
    transition: "transition duration-300",
    flexCenter: "flex items-center justify-center",
  },
};

const getRole = (title: string): RoleType => {
  switch (title) {
    case "faculty":
      return RoleType.FACULTY;
    case "student":
      return RoleType.STUDENT;
    default:
      return RoleType.ADMIN;
  }
};

export const Role: FCProps<RoleProps> = ({
  children,
  className,
  title,
  icon,
  index,
}) => {
  const { active, lastTouched, changeRole } = useRole();
  const longText = title.length > 10;
  const foldedTitle = longText ? breakWords(title, 2) : title;

  const isActive = active === index;
  const isNonInteractive = index === 1;

  return (
    <div
      className={cn(
        twStyles.base,
        className,
        `${isActive ? twStyles.active : isNonInteractive ? "pointer-events-none" : ""}`,
        `${isNonInteractive ? (active > index ? "lg:w-0" : "lg:w-1/4") : ""}`,
        `${lastTouched === index ? "z-50" : "z-0"}`,
        `${isActive && !isNonInteractive ? "cursor-auto" : ""}`,
      )}
      onClick={() => {
        if (!isActive || isNonInteractive) changeRole(index);
      }}
    >
      <Minimized
        icon={icon}
        title={foldedTitle}
        className={`
          ${isActive ? "scale-50 opacity-0" : "scale-100 opacity-100"} 
          ${isActive && isNonInteractive ? "scale-100 opacity-0 lg:opacity-100" : ""} 
          ${twStyles.utils.transition} 
          "ease-out"`}
      />
      <Maximized
        className={`
          ${isActive ? `opacity-100 ${isNonInteractive ? "pb-2 lg:opacity-0" : ""}` : "opacity-0"} 
          ${twStyles.utils.transition} 
          flex flex-col justify-start`}
      >
        <div className="flex h-fit w-full items-center lg:h-1/5">
          <div className="m-4 mr-2 aspect-square w-1/6 max-w-12 rounded-full bg-black bg-opacity-20 p-2 sm:mr-4 lg:m-8 lg:max-w-16">
            <div className="w-ful relative aspect-square">
              <Image src={icon} fill={true} alt={title.toLowerCase()} />
            </div>
          </div>

          <pre
            className={`h-fit font-serif ${longText ? "text-sm sm:text-lg lg:text-xl" : "text-lg sm:text-3xl lg:text-5xl"}`}
          >
            {title}
          </pre>
        </div>
        <Separator className="mx-auto w-5/6 -translate-y-2 opacity-70" />

        <article className="mx-[4%] mb-2 h-full select-text rounded-xl bg-black bg-opacity-20 p-2 selection:bg-[#ffffff55] selection:text-[#ffffff] lg:mt-2 lg:px-4">
          {children}
        </article>

        {index !== 1 && (
          <div
            className={`aspect-[4] h-[10%] w-full lg:h-1/6 ${twStyles.utils.flexCenter} mb-2 max-h-12 flex-row-reverse gap-2 px-[4%] font-mono sm:gap-4 lg:my-2 lg:mb-4`}
          >
            <ProfileForm role={getRole(title.toLowerCase())}>
              <SmartButton
                className="h-full w-full rounded bg-black bg-opacity-70 font-serif text-xs tracking-wider text-white text-opacity-70 transition-all duration-300 ease-out hover:scale-105 hover:bg-opacity-70 active:scale-90 lg:text-xl"
                hoverText={`sign up as ${title.toLowerCase()}`}
                tooltipStyles="text-xs bg-[#ffffff33] font-thin lg:text-lg text-white bg-opacity-50"
              >
                Continue
              </SmartButton>
            </ProfileForm>
            <SmartButton
              variant={"secondary"}
              className="h-full w-full bg-white bg-opacity-70 font-serif text-xs tracking-wider text-black text-opacity-70 transition-all duration-300 ease-out hover:scale-105 active:scale-90 lg:text-xl"
              onClick={() => changeRole(index)}
            >
              Close
            </SmartButton>
          </div>
        )}
      </Maximized>
    </div>
  );
};

const Minimized: FCProps<Pick<RoleProps, "className" | "title" | "icon">> = ({
  icon,
  title,
  className,
}) => {
  return (
    <div className={cn(twStyles.minimized.container, className)}>
      <div className={twStyles.minimized.icon}>
        <Image src={icon} fill={true} alt={title.toLowerCase()} />
      </div>
      <pre className={twStyles.minimized.text}>{title}</pre>
    </div>
  );
};

const Maximized: FCProps<Pick<RoleProps, "children" | "className">> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(className, "absolute h-full w-full")}>{children}</div>
  );
};
