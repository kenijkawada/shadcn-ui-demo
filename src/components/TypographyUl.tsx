import { cn } from "@/lib/utils";
import { TypographyProps } from "@/type/base";

export const TypographyUl = (props: TypographyProps) => {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}>
      {props.children}
    </ul>
  );
};
