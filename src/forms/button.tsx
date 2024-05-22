import { clsx } from "clsx";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  colorScheme?: "gray" | "blue" | "green" | "cyan" | "yellow" | "red";
}

export function Button({
  size = "md",
  variant = "solid",
  colorScheme = "gray",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-md font-semibold",
        size === "xs" && "h-6 px-2 text-xs",
        size === "sm" && "h-8 px-4 text-sm",
        size === "md" && "h-10 px-6 text-base",
        size === "lg" && "h-12 px-8 text-lg",
        variant === "solid" && [
          "text-white",
          colorScheme === "gray" &&
            "bg-gray-500 hover:bg-gray-600 active:bg-gray-700",
          colorScheme === "blue" &&
            "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
          colorScheme === "green" &&
            "bg-green-500 hover:bg-green-600 active:bg-green-700",
          colorScheme === "cyan" &&
            "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700",
          colorScheme === "yellow" &&
            "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700",
          colorScheme === "red" &&
            "bg-red-500 hover:bg-red-600 active:bg-red-700",
        ],
        variant === "outline" && [
          "border border-solid border-current",
          colorScheme === "gray" &&
            "text-gray-900 hover:bg-gray-100 active:bg-gray-200",
          colorScheme === "blue" &&
            "text-blue-900 hover:bg-blue-100 active:bg-blue-200",
          colorScheme === "green" &&
            "text-green-900 hover:bg-green-100 active:bg-green-200",
          colorScheme === "cyan" &&
            "text-cyan-900 hover:bg-cyan-100 active:bg-cyan-200",
          colorScheme === "yellow" &&
            "text-yellow-900 hover:bg-yellow-100 active:bg-yellow-200",
          colorScheme === "red" &&
            "text-red-900 hover:bg-red-100 active:bg-red-200",
        ],
        variant === "ghost" && [
          colorScheme === "gray" &&
            "text-gray-900 hover:bg-gray-100 active:bg-gray-200",
          colorScheme === "blue" &&
            "text-blue-900 hover:bg-blue-100 active:bg-blue-200",
          colorScheme === "green" &&
            "text-green-900 hover:bg-green-100 active:bg-green-200",
          colorScheme === "cyan" &&
            "text-cyan-900 hover:bg-cyan-100 active:bg-cyan-200",
          colorScheme === "yellow" &&
            "text-yellow-900 hover:bg-yellow-100 active:bg-yellow-200",
          colorScheme === "red" &&
            "text-red-900 hover:bg-red-100 active:bg-red-200",
        ],
      )}
    />
  );
}
