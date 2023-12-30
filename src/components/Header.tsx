"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { MenuDialog } from "./MenuDialog";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 bg-background/75 flex justify-between items-center px-6 py-4 md:px-8 lg:px-10">
        <Link href="#" className="hidden lg:block">
          <span className="italic text-2xl font-semibold">shadcn-ui-demo</span>
        </Link>
        <MenuDialog />
        <ModeToggle />
      </header>
    </>
  );
}
