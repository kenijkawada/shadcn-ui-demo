import { cn } from "@/lib/utils";
import { TypographyProps } from "@/type/base";

export const TypographyP = (props: TypographyProps) => {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}>
      {props.children}
    </p>
  );
};
