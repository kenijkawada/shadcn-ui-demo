import { cn } from "@/lib/utils";
import { TypographyProps } from "@/type/base";

export const TypographyBlockquote = (props: TypographyProps) => {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", props.className)}>
      {props.children}
    </blockquote>
  );
};
