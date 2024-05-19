import { clsx } from "clsx";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}
export interface CardHeaderProps
  extends React.ComponentPropsWithoutRef<"div"> {}
export interface CardBodyProps extends React.ComponentPropsWithoutRef<"div"> {}
export interface CardFooterProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export function Card({ ...props }: CardProps) {
  return (
    <div
      {...props}
      className={clsx("flex flex-col rounded-md", props.className)}
    />
  );
}

export function CardHeader({ ...props }: CardHeaderProps) {
  return <div {...props} className={clsx("flex-1 p-5", props.className)} />;
}

export function CardBody({ ...props }: CardBodyProps) {
  return <div {...props} className={clsx("flex-1 p-5", props.className)} />;
}

export function CardFooter({ ...props }: CardFooterProps) {
  return <div {...props} className={clsx("flex-1 p-5", props.className)} />;
}
