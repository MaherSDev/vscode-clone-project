// interface IProps {
// }

import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarItem from "./OpenedFileBarItem";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const OpenedFileBar = () => {
  const { openedFiles, clickedFile: { fileContent } } = useSelector((state: RootState) => state.tree);
  return (
    <div className="border-b border-white ">
      <div className="flex items-center w-full h-fit">
        {openedFiles.map((file) => (
          <OpenedFileBarItem key={file.id} file={file} />
        ))}
      </div>
      {fileContent && <FileSyntaxHighlighter content={fileContent} />}
    </div>
  );
};

export default OpenedFileBar;
