import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div>
      <div className="flex h-dvh">
        <div className="w-full">
          <ResizablePanel
            showLeftPanel
            leftPanel={
              <div className="p-2">
                <RecursiveComponent fileTree={fileTree} />
              </div>
            }
            rightPanel={
              <div className="w-full">
                <Preview />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
