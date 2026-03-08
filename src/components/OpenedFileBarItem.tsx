import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarItem = ({ file }: IProps) => {
  const { id, name, content } = file;
  const dispatch = useDispatch();
  const {
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);

  // ** Handlers
  const onClick = () => {
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContent: content,
        activeTabId: id,
      }),
    );
  };

  return (
    <div
      className={`flex items-center p-2 border-t-3 cursor-pointer hover:bg-[#64646473] duratoin-300 ${
        id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon fileName={name} />
      <span className="cursor-pointer duratoin-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        {name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646490] duratoin-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarItem;
