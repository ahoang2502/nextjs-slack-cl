"use client";

import { useEffect, useMemo } from "react";

import { UserButton } from "@/components/UserButton";

import { useGetWorkspaces } from "@/features/workspaces/api/useGetWorkspaces";

export default function Home() {
  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) console.log("redirect to workspace");
    else console.log("open creation modal");
  }, [workspaceId, isLoading]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
