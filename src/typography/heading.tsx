import { clsx } from "clsx";

export interface HeadingProps
  extends React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4"> {
  level: 1 | 2 | 3 | 4;
}

export function Heading({ level = 1, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      {...props}
      className={clsx(
        level === 1 && "text-4xl font-extrabold",
        level === 2 && "text-2xl font-bold",
        level === 3 && "text-xl font-semibold",
        level === 4 && "text-base font-semibold",
      )}
    />
  );
}
