import { useSelector } from "react-redux";
import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import type { RootState } from "./app/store";

const App = () => {
  const {
    clickedFile: { fileContent },
  } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <div className="flex h-dvh">
        <div className="w-64 border-r border-white">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <div className="w-full">
          <OpenedFileBar />
          {fileContent}
        </div>
      </div>
    </div>
  );
};

export default App;
