type SpacerProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const sizeClasses: Record<NonNullable<SpacerProps["size"]>, string> = {
  xs: "h-3",
  sm: "h-6",
  md: "h-10",
  lg: "h-16",
  xl: "h-24",
};

export default function Spacer({ size = "md" }: SpacerProps) {
  return <div aria-hidden className={sizeClasses[size]} />;
}