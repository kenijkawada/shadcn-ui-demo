import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

type AspectRatioDemoProps = {
  ratio?: number;
};

export function AspectRatioDemo(props: AspectRatioDemoProps) {
  const { ratio = 16 / 9 } = props;
  return (
    <AspectRatio ratio={ratio} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
}
