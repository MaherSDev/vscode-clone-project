import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { doesFileObjExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exists = doesFileObjExist(openedFiles, id);
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContent: content,
        activeTabId: id,
      }),
    );
    if (exists) return;
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  };

  return (
    <>
      <div className="cursor-pointer">
        <div className="flex items-center mb-1">
          {isFolder ? (
            <div className="">
              <div
                className="recursive-component hover:bg-[#64646473] duratoin-300"
                onClick={toggle}
              ></div>
              <div className="flex items-center w-full relative">
                <span className="mr-1 relative z-2">
                  {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                </span>
                <RenderFileIcon
                  fileName={name}
                  isFolder={isFolder}
                  isOpen={isOpen}
                />
                <span className="ml-1 text-nowrap">{name}</span>
              </div>
            </div>
          ) : (
            <div className="ml-4 flex items-center" onClick={onFileClicked}>
              <div
                className="recursive-component hover:bg-[#64646473] duratoin-300"
                onClick={onFileClicked}
              ></div>
              <RenderFileIcon fileName={name} />
              <span className="ml-1 text-nowrap">{name}</span>
            </div>
          )}
        </div>
        {isOpen &&
          children &&
          children.map((file, idx) => (
            <div className="pl-2 relative z-2" key={idx}>
              <RecursiveComponent fileTree={file} />
            </div>
          ))}
      </div>
    </>
  );
};

export default RecursiveComponent;
