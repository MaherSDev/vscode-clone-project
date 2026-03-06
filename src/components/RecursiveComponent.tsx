import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import FolderIcon from "./SVG/Folder";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, isFolder, children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex itmes-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <FolderIcon />
          </div>
        ) : (
          <span className="mr-1">
            <FileIcon />
          </span>
        )}
        <span>{name}</span>
      </div>
      {children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
