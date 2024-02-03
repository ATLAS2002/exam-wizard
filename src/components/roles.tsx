"use client";

import type { FCProps } from "~/types";
import { Role } from "./role";
import { RoleProvider } from "~/context/RoleProvider";

export const Roles: FCProps = () => (
  <RoleProvider>
    <Role
      index={1}
      icon="/icons/institute.png"
      title={`Choose your role`}
      className="origin-top-left bg-aegean-700"
    >
      <ul className="list-inside list-disc text-pretty text-[35%] leading-loose text-white text-opacity-70 lg:text-[50%]">
        <li className="m-0 p-0">
          Access information related to academic programs.
        </li>
        <li className="m-0 p-0">View grades, track academic progress.</li>
        <li>Access information about exam schedules and venue.</li>
      </ul>
    </Role>
    <Role
      index={2}
      icon="/icons/admin.png"
      title="Admin"
      className="origin-top-right bg-indian-500"
    >
      <ul className="list-inside list-disc text-pretty text-[35%] leading-loose text-white text-opacity-70 lg:text-[50%]">
        <li className="m-0 p-0">
          Access information related to academic programs.
        </li>
        <li className="m-0 p-0">View grades, track academic progress.</li>
        <li>Access information about exam schedules and venue.</li>
      </ul>
    </Role>
    <Role
      index={3}
      icon="/icons/teacher.png"
      title="Faculty"
      className="origin-bottom-left bg-indigo-500"
    >
      <ul className="list-inside list-disc text-pretty text-[35%] leading-loose text-white text-opacity-70 lg:text-[50%]">
        <li className="m-0 p-0">
          Access information related to academic programs.
        </li>
        <li className="m-0 p-0">View grades, track academic progress.</li>
        <li>Access information about exam schedules and venue.</li>
      </ul>
    </Role>
    <Role
      index={4}
      icon="/icons/student.png"
      title="Student"
      className="origin-bottom-right bg-olive-300"
    >
      <ul className="list-inside list-disc text-pretty text-[35%] leading-loose text-white text-opacity-70 lg:text-[50%]">
        <li className="m-0 p-0">
          Access information related to academic programs.
        </li>
        <li className="m-0 p-0">View grades, track academic progress.</li>
        <li>Access information about exam schedules and venue.</li>
      </ul>
    </Role>
  </RoleProvider>
);
