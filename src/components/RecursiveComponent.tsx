import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setOpenedFiles } from "../app/features/fileTreeSlice";
import { doesFileObjExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
	const { id, name, isFolder, children } = fileTree;
  const dispatch = useDispatch();
  const { openedFile } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(false);



  const toggle = () => setIsOpen((prev) => !prev);
	const onFileClicked = () => {
		const exists = doesFileObjExist(openedFile, id);
		if (exists) return;
		dispatch(setOpenedFiles([...openedFile, fileTree]));
	}

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            <span className="mr-1">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div className="ml-4 flex items-center" onClick={() => dispatch(setOpenedFiles([...openedFile, fileTree]))}>
            <RenderFileIcon fileName={name} />
            <span className="ml-1">{name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
