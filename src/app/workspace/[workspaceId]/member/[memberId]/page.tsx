"use client";

import { AlertTriangle, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { useMemberId } from "@/hooks/useMemberId";
import { useWorkspaceId } from "@/hooks/useWorkspaceId";
import { Id } from "../../../../../../convex/_generated/dataModel";

import { useCreateOrGetConversation } from "@/features/conversations/api/useCreateOrGetConversation";

const MemberIdPage = () => {
  const workspaceId = useWorkspaceId();
  const memberId = useMemberId();

  const [conversationId, setConversationId] =
    useState<Id<"conversations"> | null>(null);

  const { data, mutate, isPending } = useCreateOrGetConversation();

  useEffect(() => {
    mutate(
      { workspaceId, memberId },
      {
        onSuccess(data) {
          setConversationId(data);
        },
        onError(error) {
          toast.error("Failed to create or get conversation");
        },
      }
    );
  }, [memberId, workspaceId, mutate]);

  if (isPending)
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="size-6 text-muted-foreground animate-spin" />
      </div>
    );

  if (!conversationId)
    return (
      <div className="h-full flex flex-col gap-y-2 items-center justify-center">
        <AlertTriangle className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          Conversation not found
        </span>
      </div>
    );

  return <Conversation id={conversationId} />;
};

export default MemberIdPage;
