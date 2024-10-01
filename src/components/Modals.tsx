"use client";

import { useEffect, useState } from "react";

import { CreateChannelModal } from "@/features/channels/components/CreateChannelModal";
import { CreateWorkspaceModal } from "@/features/workspaces/components/CreateWorkspaceModal";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateWorkspaceModal />
      <CreateChannelModal />
    </>
  );
};
