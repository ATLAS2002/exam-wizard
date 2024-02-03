import {
  type LucideProps,
  type LucideIcon,
  Box,
  Home,
  GanttChartSquare,
  Target,
} from "lucide-react";

const lookup: Record<string, LucideIcon> = {
  home: Home,
  dashboard: GanttChartSquare,
  roles: Target,
};

interface IconProps extends LucideProps {
  name: keyof typeof lookup;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lookup[name] ?? Box;

  return <LucideIcon {...props} />;
};
