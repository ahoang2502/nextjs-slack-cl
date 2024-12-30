import React from "react";

import { Id } from "../../../../../../convex/_generated/dataModel";
import { useMemberId } from "@/hooks/useMemberId";

import { useGetMember } from "@/features/members/api/useGetMember";

interface ConversationProps {
  id: Id<"conversations">;
}

export const Conversation = ({ id }: ConversationProps) => {
  const memberId = useMemberId();

  const { data: member, isLoading: memberLoading } = useGetMember({
    id: memberId,
  });

  return <div></div>;
};
