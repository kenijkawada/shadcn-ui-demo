import { TypographyBlockquote } from "./TypographyBlockquote";
import { TypographyH1 } from "./TypographyH1";
import { TypographyH2 } from "./TypographyH2";
import { TypographyH3 } from "./TypographyH3";
import { TypographyH4 } from "./TypographyH4";
import { TypographyP } from "./TypographyP";
import { TypographyUl } from "./TypographyUl";

export function TypographyDemo() {
  return (
    <div>
      <TypographyH1>Heading 1</TypographyH1>
      <TypographyH2>Heading 2</TypographyH2>
      <TypographyH3>Heading 3</TypographyH3>
      <TypographyH4>Heading 4</TypographyH4>
      <TypographyP>Paragraph</TypographyP>
      <TypographyBlockquote>&quot;blockquote&quot;</TypographyBlockquote>
      <TypographyUl>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </TypographyUl>
    </div>
  );
}
