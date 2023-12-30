import { cn } from "@/lib/utils";
import { TypographyProps } from "@/type/base";

export const TypographyH4 = (props: TypographyProps) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {props.children}
    </h4>
  );
};
