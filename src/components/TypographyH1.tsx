import { cn } from "@/lib/utils";
import { TypographyProps } from "@/type/base";

export const TypographyH1 = (props: TypographyProps) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className,
      )}
    >
      {props.children}
    </h1>
  );
};
