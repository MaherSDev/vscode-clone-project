import { useDispatch } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFile;
}

const OpenedFileBarItem = ({ file }: IProps) => {
  const dispatch = useDispatch();

  // ** Handlers
  const onClick = () => {
    const {name, content} = file;
    dispatch(setClickedFileAction({filename: name, fileContent: content}));
  }

  return (
    <div className="flex items-center p-2" onClick={onClick}>
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duratoin-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duratoin-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarItem;
