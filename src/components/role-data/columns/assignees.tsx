import { ProfilePicture } from "~/components/ui/avatar";
import { getInitials } from "~/lib/utils";
import type { FCProps } from "~/types";

export interface AssigneeProps {
  name: string;
  image?: string;
}

const avatarStyles = [
  { container: "z-20", content: "opacity-100" },
  { container: "z-10 left-10", content: "opacity-80" },
  { container: "left-20", content: "opacity-60" },
];

export const Assignees: FCProps<{ assignees: AssigneeProps[] }> = ({
  assignees,
}) => {
  return (
    <ul className="relative h-12 min-w-48">
      {assignees.slice(0, 3).map(({ name, image }, index) => (
        <li
          key={index}
          className={`bg-stone group absolute h-fit w-fit rounded-full bg-white shadow-md hover:z-30 ${avatarStyles[index]?.container}`}
        >
          <ProfilePicture
            src={image}
            fallback={getInitials(name, { startFrom: 1, separator: "." })}
            fallbackStyles="bg-stone-500"
            className={`bg-stone-500 ${avatarStyles[index]?.content}`}
          />
        </li>
      ))}
      {assignees.length > 3 && (
        <h1 className="absolute left-36 my-3 font-regular text-xl text-stone-500">
          +{assignees.length - 3}
        </h1>
      )}
    </ul>
  );
};
