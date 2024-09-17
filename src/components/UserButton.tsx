"use client";

import { Loader } from "lucide-react";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const UserButton = () => {
  const { data, isLoading } = useCurrentUser();

  if (isLoading)
    return <Loader className="size-4 text-muted-foreground animate-spin" />;

  if (data === null) return null;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition">
          <AvatarImage />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" side="right" className="w-60">
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
