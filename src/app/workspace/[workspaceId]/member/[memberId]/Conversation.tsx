import { Loader } from "lucide-react";

import { useMemberId } from "@/hooks/useMemberId";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { Header } from "./Header";

import { useGetMember } from "@/features/members/api/useGetMember";
import { useGetMessages } from "@/features/messages/api/useGetMessages";

interface ConversationProps {
  id: Id<"conversations">;
}

export const Conversation = ({ id }: ConversationProps) => {
  const memberId = useMemberId();

  const { data: member, isLoading: memberLoading } = useGetMember({
    id: memberId,
  });
  const { results, status, loadMore } = useGetMessages({
    conversationId: id,
  });

  if (memberLoading || status === "LoadingFirstPage")
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="size-6 text-muted-foreground animate-spin" />
      </div>
    );

  return (
    <div className="flex flex-col h-full">
      <Header
        memberName={member?.user.name}
        memberImage={member?.user.image}
        onClick={() => {}}
      />
    </div>
  );
};
