import { clsx } from "clsx";

export interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  variant?: "subtle" | "solid" | "outline";
  colorScheme?: "gray" | "blue" | "green" | "cyan" | "yellow" | "red";
}

export function Badge({
  variant = "subtle",
  colorScheme = "gray",
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={clsx(
        "rounded-sm px-1 text-xs font-bold uppercase",
        variant === "subtle" && [
          colorScheme === "gray" && "bg-gray-100 text-gray-900",
          colorScheme === "blue" && "bg-blue-100 text-blue-900",
          colorScheme === "green" && "bg-green-100 text-green-900",
          colorScheme === "cyan" && "bg-cyan-100 text-cyan-900",
          colorScheme === "yellow" && "bg-yellow-100 text-yellow-900",
          colorScheme === "red" && "bg-red-100 text-red-900",
        ],
        variant === "solid" && [
          "text-white",
          colorScheme === "gray" && "bg-gray-500",
          colorScheme === "blue" && "bg-blue-500",
          colorScheme === "green" && "bg-green-500",
          colorScheme === "cyan" && "bg-cyan-500",
          colorScheme === "yellow" && "bg-yellow-500",
          colorScheme === "red" && "bg-red-500",
        ],
        variant === "outline" && [
          "border border-solid border-current",
          colorScheme === "gray" && "text-gray-500",
          colorScheme === "blue" && "text-blue-500",
          colorScheme === "green" && "text-green-500",
          colorScheme === "cyan" && "text-cyan-500",
          colorScheme === "yellow" && "text-yellow-500",
          colorScheme === "red" && "text-red-500",
        ],
      )}
    />
  );
}
