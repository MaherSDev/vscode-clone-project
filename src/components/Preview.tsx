import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFileBar from "./OpenedFileBar";

const Preview = () => {
  const {
    clickedFile: { fileContent },
  } = useSelector((state: RootState) => state.tree);
  return (
    <>
      <OpenedFileBar />
      {fileContent && <FileSyntaxHighlighter content={fileContent} />}
    </>
  );
};

export default Preview;
