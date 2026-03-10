import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import WelcomeTap from "./components/WelcomeTap";

const App = () => {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);

  return (
    <div>
      <div className="flex h-dvh">
        <div className="w-full">
          <ResizablePanel
            showLeftPanel
            leftPanel={
              <div className="py-2">
                <RecursiveComponent fileTree={fileTree} />
              </div>
            }
            rightPanel={
              <div className="w-full">
                {openedFiles.length ? <Preview /> : <WelcomeTap />}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
