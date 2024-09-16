"use client";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();

  return <div onClick={() => signOut()}>signout</div>;
}
