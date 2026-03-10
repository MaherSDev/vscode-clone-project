import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarItem from "./OpenedFileBarItem";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

const OpenedFileBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div className={"border-b border-white"}>
      <div
        className="flex items-center w-full h-fit"
        onContextMenu={(e) => {
          e.preventDefault();
          setContextMenuPosition({ x: e.clientX, y: e.clientY });
          setShowContextMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFileBarItem key={file.id} file={file} />
        ))}
      </div>
      {showContextMenu && (
        <ContextMenu
          setShowMenu={setShowContextMenu}
          positions={contextMenuPosition}
        />
      )}
    </div>
  );
};

export default OpenedFileBar;
