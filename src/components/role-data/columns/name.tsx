import { useRouter } from "next/navigation";
import { SmartButton } from "~/components/ui/button";
import type { FCProps } from "~/types";

export interface NameProps {
  title: string;
  description?: string;
}

export const Name: FCProps<{ index: number; description?: string }> = ({
  children: title,
  index,
  description,
}) => {
  const router = useRouter();

  return (
    <h1 className="flex h-[3.75rem] w-80 flex-col justify-center">
      <SmartButton
        variant={"none"}
        size={"none"}
        side="bottom"
        className="font-regular text-lg hover:underline"
        hoverText="Double click to see description"
        tooltipStyles="bg-stone-500 text-white font-bold text-base"
        onDoubleClick={() => {
          router.push(`/role?id=${index}`);
        }}
      >
        {index}. {title}
      </SmartButton>
      {description && (
        <div className="relative ml-2 flex min-h-8 w-5/6 overflow-hidden text-xs">
          <span className="absolute block font-code opacity-80">
            {description}
          </span>
        </div>
      )}
    </h1>
  );
};
