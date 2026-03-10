import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOpenedFilesAction } from "../../app/features/fileTreeSlice";

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
  };
  const handleCloseTab = () => {
    dispatch(setOpenedFilesAction([]));
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
          <button
            className="w-full border-x-5 border-white px-7 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
            onClick={handleCloseTab}
          >
            Close
          </button>{" "}
        </li>
        <li>
          <button
            className="w-full border-x-5 border-white px-7 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
            onClick={handleCloseAll}
          >
            Close all
          </button>{" "}
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
