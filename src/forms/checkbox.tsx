import { clsx } from "clsx";

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
}

export function Checkbox({ size = "md", children, ...props }: CheckboxProps) {
  return (
    <label className="inline-flex items-center">
      <input
        {...props}
        type="checkbox"
        className={clsx(
          size === "sm" && "size-3",
          size === "md" && "size-4",
          size === "lg" && "size-5",
        )}
      />
      <span
        className={clsx(
          "ml-2",
          size === "sm" && "text-sm",
          size === "md" && "text-base",
          size === "lg" && "text-lg",
        )}
      >
        {children}
      </span>
    </label>
  );
}
