import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationLink href="#">1</PaginationLink>
        <PaginationLink href="#" isActive>
          2
        </PaginationLink>
        <PaginationLink href="#">3</PaginationLink>
        <PaginationEllipsis />
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  );
}
