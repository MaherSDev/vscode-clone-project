// interface IProps {
// }

import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarItem from "./OpenedFileBarItem";

const OpenedFileBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className="flex items-center border-b border-white w-full h-fit">
      {openedFiles.map((file) => (
        <OpenedFileBarItem key={file.id} file={file} />
      ))}
    </div>
  );
};

export default OpenedFileBar;
