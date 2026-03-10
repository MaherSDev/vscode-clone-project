import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setOpenedFilesAction,
  setTabIdToRemoveAction,
} from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarItem = ({ file }: IProps) => {
  const { id, name, content } = file;
  const dispatch = useDispatch();
  const {
    openedFiles,
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

  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId);
    const lastTap = filtered[filtered.length - 1];

    if (!lastTap) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFileAction({
          filename: "",
          fileContent: "",
          activeTabId: null,
        }),
      );
      return;
    }

    const { id, name, content } = lastTap;
    dispatch(setOpenedFilesAction(filtered));
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
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdToRemoveAction(id));
      }}
    >
      <RenderFileIcon fileName={name} />
      <span className="cursor-pointer duratoin-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        {name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646490] duratoin-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarItem;
