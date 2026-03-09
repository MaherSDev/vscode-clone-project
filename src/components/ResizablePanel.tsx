import {
  Group,
  Panel,
  Separator,
  useDefaultLayout,
} from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined
}

const ResizablePanel = ({ defaultLayout = [33, 67] }: IProps) => {
  const { onLayoutChanged } = useDefaultLayout({
    id: "unique-layout-id",
    storage: localStorage,
  });
  return (
    <Group onLayoutChanged={onLayoutChanged}>
      <Panel defaultSize={defaultLayout[0]} id="left">
        left
      </Panel>
      <Separator className="w-1 bg-red-500"/>
      <Panel defaultSize={defaultLayout[1]} id="right">
        right
      </Panel>
    </Group>
  );
};

export default ResizablePanel;
