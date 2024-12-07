"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";
import { WorkspaceSidebar } from "./WorkspaceSidebar";
import { usePanel } from "@/hooks/usePanel";
import { Loader } from "lucide-react";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  const { parentMessageId, onClose } = usePanel();

  const showPanel = !!parentMessageId;

  return (
    <div className="h-full ">
      <Toolbar />

      <div className="flex h-[calc(100vh-40px)] ">
        <Sidebar />

        <ResizablePanelGroup
          direction="horizontal"
          autoSaveId="ta-workspace-layout"
        >
          <ResizablePanel
            defaultSize={20}
            minSize={11}
            className="bg-[#86558d]"
          >
            <WorkspaceSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel minSize={20}>{children}</ResizablePanel>

          {showPanel && (
            <>
              <ResizableHandle withHandle />
              <ResizablePanel minSize={20} defaultSize={29}>
                <div>
                  <Loader className="size-5 animate-spin text-muted-foreground" />
                </div>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
