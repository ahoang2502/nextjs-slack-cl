"use client";

import { useAuthActions } from "@convex-dev/auth/react";

import { UserButton } from "@/components/UserButton";

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div>
      <UserButton />
    </div>
  );
}
