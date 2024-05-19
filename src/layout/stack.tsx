import { clsx } from "clsx";

export interface StackProps extends React.ComponentPropsWithoutRef<"div"> {
  direction?: "column" | "row";
  spacing?: React.CSSProperties["gap"];
}

export function Stack({
  direction = "column",
  spacing = "0.5rem",
  ...props
}: StackProps) {
  return (
    <div
      {...props}
      className={clsx(
        "flex",
        direction === "column" && "flex-col",
        direction === "row" && "flex-row",
      )}
      style={{ ...props.style, gap: spacing }}
    />
  );
}
