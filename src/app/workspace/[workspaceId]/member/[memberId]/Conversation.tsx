import { Loader } from "lucide-react";

import { MessageList } from "@/components/MessageList";
import { useMemberId } from "@/hooks/useMemberId";
import { usePanel } from "@/hooks/usePanel";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { ChatInput } from "./ChatInput";
import { Header } from "./Header";

import { useGetMember } from "@/features/members/api/useGetMember";
import { useGetMessages } from "@/features/messages/api/useGetMessages";

interface ConversationProps {
  id: Id<"conversations">;
}

export const Conversation = ({ id }: ConversationProps) => {
  const memberId = useMemberId();

  const { onOpenProfile } = usePanel();

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
        onClick={() => onOpenProfile(memberId)}
      />
      <MessageList
        data={results}
        variant="conversation"
        memberImage={member?.user.image}
        memberName={member?.user.name}
        loadMore={loadMore}
        isLoadingMore={status === "LoadingMore"}
        canLoadMore={status === "CanLoadMore"}
      />
      <ChatInput
        placeholder={`Message ${member?.user.name}`}
        conversationId={id}
      />
    </div>
  );
};
