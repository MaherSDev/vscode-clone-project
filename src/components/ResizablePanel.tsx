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
  showLeftPanel: boolean;
}

const ResizablePanel = ({ leftPanel, rightPanel, showLeftPanel }: IProps) => {
  const { defaultLayout, onLayoutChanged } = useDefaultLayout({
    id: "resizePanel",
    panelIds: showLeftPanel ? ["left", "right"] : ["right"],
    storage: localStorage,
  });
  return (
    <Group
      defaultLayout={defaultLayout}
      onLayoutChange={onLayoutChanged}
      autoSave="condition"
    >
      {showLeftPanel && (
        <>
          <Panel collapsible minSize={"50px"} id="left">
            {leftPanel}
          </Panel>
          <Separator className="w-1 border-r-2 border-white focus:outline-0" />
        </>
      )}
      <Panel id="right">{rightPanel}</Panel>
    </Group>
  );
};

export default ResizablePanel;
