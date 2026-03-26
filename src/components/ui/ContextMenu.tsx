import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../../app/features/fileTreeSlice";
import type { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ positions: { x, y }, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { openedFiles, tabIdToRemove } = useSelector(
    ({ tree }: RootState) => tree,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        return setShowMenu(false);
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  const handleCloseAll = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };
  const handleCloseTab = () => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    const lastTap = filtered[filtered.length - 1];
    setShowMenu(false);

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
    <div ref={menuRef}>
      <ul
        className="py-1 bg-white text-black w-fit rounded-md"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li>
          <button className="contex-menu-item" onClick={handleCloseTab}>
            Close
          </button>{" "}
        </li>
        <li>
          <button className="contex-menu-item" onClick={handleCloseAll}>
            Close all
          </button>{" "}
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
