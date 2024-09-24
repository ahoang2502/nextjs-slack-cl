import { Bell, Home, MessageCircle, MoreHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";

import { UserButton } from "@/components/UserButton";
import { SidebarButton } from "./SidebarButton";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[70px] h-full bg-[#611e69] flex flex-col gap-y-4 items-center pt-[9px] pb-[4px]">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SidebarButton icon={MessageCircle} label="DMs" />
      <SidebarButton icon={Bell} label="Activity" />
      <SidebarButton icon={MoreHorizontal} label="More" />

      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
