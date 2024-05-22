import { clsx } from "clsx";

export interface TextProps extends React.ComponentPropsWithoutRef<"p"> {
  size?: "xs" | "sm" | "md" | "lg";
}

export function Text({ size = "md", ...props }: TextProps) {
  return (
    <p
      {...props}
      className={clsx(
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
      )}
    />
  );
}
