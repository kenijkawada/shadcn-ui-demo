import { AccordionDemo } from "@/components/AccordionDemo";
import { AlertDemo } from "@/components/AlertDemo";
import { AlertDialogDemo } from "@/components/AlertDialogDemo";
import { AspectRatioDemo } from "@/components/AspectRatioDemo";
import { AvatarDemo } from "@/components/AvatarDemo";
import { CarouselDemo } from "@/components/CarouselDemo";
import { DataTableDemo } from "@/components/DataTableDemo";
import { DrawerDemo } from "@/components/DrawerDemo";
import { PaginationDemo } from "@/components/PaginationDemo";
import { ProfileFormDemo } from "@/components/ProfileFormDemo";
import { SkeletonDemo } from "@/components/SkeletonDemo";
import { TypographyDemo } from "@/components/TypographyDemo";
import { TypographyH1 } from "@/components/TypographyH1";
import { TypographyH2 } from "@/components/TypographyH2";

export default function Home() {
  return (
    <main className="m-10 flex flex-col gap-4">
      <TypographyH1>Component</TypographyH1>

      <TypographyH2>Typography</TypographyH2>
      <TypographyDemo />

      <TypographyH2>Accordion</TypographyH2>
      <AccordionDemo />

      <TypographyH2>Alert</TypographyH2>
      <AlertDemo />

      <TypographyH2>AlertDialogDemo</TypographyH2>
      <AlertDialogDemo />

      <TypographyH2>AspectRatioDemo</TypographyH2>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
        <div className="w-[200px] lg:w-[400px]">
          <AspectRatioDemo />
        </div>
        <div className="w-[200px] lg:w-[400px]">
          <AspectRatioDemo ratio={1 / 1} />
        </div>
      </div>

      <TypographyH2>Avatar</TypographyH2>
      <AvatarDemo />

      <TypographyH2>Carousel</TypographyH2>
      <div className="flex items-center justify-center">
        <CarouselDemo />
      </div>

      <TypographyH2>DrawerDemo</TypographyH2>
      <DrawerDemo />

      <TypographyH2>ProfileFormDemo</TypographyH2>
      <ProfileFormDemo />

      <TypographyH2>SkeletonDemo</TypographyH2>
      <SkeletonDemo />

      <TypographyH2>PaginationDemo</TypographyH2>
      <PaginationDemo />

      <TypographyH2>DataTableDemo</TypographyH2>
      <DataTableDemo />
    </main>
  );
}
