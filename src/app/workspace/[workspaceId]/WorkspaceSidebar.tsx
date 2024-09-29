import {
  AlertTriangle,
  HashIcon,
  Loader,
  MessageSquareText,
  SendHorizonal,
} from "lucide-react";

import { useGetChannels } from "@/features/channels/api/useGetChannels";
import { useCurrentMember } from "@/features/members/api/useCurrentMember";
import { useGetMembers } from "@/features/members/api/useGetMembers";
import { useGetWorkspace } from "@/features/workspaces/api/useGetWorkspace";

import { useWorkspaceId } from "@/hooks/useWorkspaceId";
import { SidebarItem } from "./SidebarItem";
import { UserItem } from "./UserItem";
import { WorkspaceHeader } from "./WorkspaceHeader";
import { WorkspaceSection } from "./WorkspaceSection";

export const WorkspaceSidebar = () => {
  const workspaceId = useWorkspaceId();

  const { data: member, isLoading: memberLoading } = useCurrentMember({
    workspaceId,
  });
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });
  const { data: channels, isLoading: channelsLoading } = useGetChannels({
    workspaceId,
  });
  const { data: members, isLoading: membersLoading } = useGetMembers({
    workspaceId,
  });

  if (workspaceLoading || memberLoading)
    return (
      <div className="flex flex-col bg-[#7f4587] h-full items-center justify-center">
        <Loader className="size-5 animate-spin text-white" />
      </div>
    );

  if (!workspace || !member)
    return (
      <div className="flex flex-col gap-y-2 bg-[#7f4587] h-full items-center justify-center">
        <AlertTriangle className="size-5 text-white" />

        <p className="text-white text-sm">Workspace not found</p>
      </div>
    );

  return (
    <div className="flex flex-col bg-[#7f4587] h-full">
      <WorkspaceHeader
        workspace={workspace}
        isAdmin={member.role === "admin"}
      />

      <div className="flex flex-col px-2 mt-3">
        <SidebarItem id="threads" label="Threads" icon={MessageSquareText} />
        <SidebarItem id="drafts" label="Drafts & Sent" icon={SendHorizonal} />
      </div>

      <WorkspaceSection label="Channels" hint="New channel" onNew={() => {}}>
        {channels?.map((item) => (
          <SidebarItem
            key={item._id}
            icon={HashIcon}
            label={item.name}
            id={item._id}
          />
        ))}
      </WorkspaceSection>

      <WorkspaceSection
        label="Direct messages"
        hint="New direct message"
        onNew={() => {}}
      >
        {members?.map((item) => (
          <UserItem
            label={item.user.name}
            key={item._id}
            id={member._id}
            image={item.user.image}
          />
        ))}
      </WorkspaceSection>
    </div>
  );
};
