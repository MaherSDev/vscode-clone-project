import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div>
      <div className="flex h-dvh">
        <div className="w-64 border-r border-white">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <div className="w-full">
          {/* <OpenedFileBar /> */}
          <ResizablePanel />
        </div>
      </div>
    </div>
  );
};

export default App;
