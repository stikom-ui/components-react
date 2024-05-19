export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {}

export function Slider({ children, ...props }: SliderProps) {
  return <input {...props} type="range" />;
}
