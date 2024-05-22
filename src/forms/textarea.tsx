export interface TextareaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {}

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className="rounded-md border border-solid px-4 py-2 focus-visible:outline-gray-500"
    />
  );
}
