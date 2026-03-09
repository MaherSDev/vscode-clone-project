import type { ReactNode } from "react";
import {
  Group,
  Panel,
  Separator,
  useDefaultLayout,
} from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

const ResizablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
}: IProps) => {
  const { onLayoutChanged } = useDefaultLayout({
    id: "unique-layout-id",
    storage: localStorage,
  });
  return (
    <Group onLayoutChanged={onLayoutChanged}>
      <Panel defaultSize={defaultLayout[0]} id="left">
        {leftPanel}
      </Panel>
      <Separator className="w-1 border-r-2 border-white" />
      <Panel defaultSize={defaultLayout[1]} id="right">
        {rightPanel}
      </Panel>
    </Group>
  );
};

export default ResizablePanel;
