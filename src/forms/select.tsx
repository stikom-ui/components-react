import { clsx } from "clsx";

export interface SelectProps
  extends Omit<React.ComponentPropsWithoutRef<"select">, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
}

export function Select({ size = "md", ...props }: SelectProps) {
  return (
    <select
      {...props}
      className={clsx(
        "border border-solid focus-visible:outline-gray-500",
        size === "xs" && "h-6 rounded-sm px-2 text-xs",
        size === "sm" && "h-8 rounded-sm px-3 text-sm",
        size === "md" && "h-10 rounded-md px-4 text-base",
        size === "lg" && "h-12 rounded-lg px-4 text-lg",
      )}
    />
  );
}
