import { cn } from "@/lib/utils";
import { TypographyProps } from "@/type/base";

export const TypographyH2 = (props: TypographyProps) => {
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        props.className,
      )}
    >
      {props.children}
    </h2>
  );
};
