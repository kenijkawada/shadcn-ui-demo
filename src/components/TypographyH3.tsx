import { cn } from "@/lib/utils";
import { TypographyProps } from "@/type/base";

export const TypographyH3 = (props: TypographyProps) => {
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {props.children}
    </h3>
  );
};
