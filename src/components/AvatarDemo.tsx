import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/33624921?v=4"
        alt="@kenjikawaada"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
