interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = ({ params: { workspaceId } }: WorkspaceIdPageProps) => {
  return <div>Id: {workspaceId}</div>;
};

export default WorkspaceIdPage;
