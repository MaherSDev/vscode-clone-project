import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";

const App = () => {

  return (
    <>
      <FileComponent filename="index.html" />
      <FolderComponent foldername="node_modules" />
    </>
  );
}

export default App;
