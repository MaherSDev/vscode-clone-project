import FolderIcon from "./SVG/Folder";
import RightArrowIcon from "./SVG/Right";

interface IProps {
  foldername: string;
}

const FolderComponent = ({ foldername }: IProps) => {
  return (
    <div className="flex items-center">
      <RightArrowIcon />
      <span className="mr-1">
        <FolderIcon />
      </span>
      <span>{foldername}</span>
    </div>
  );
};

export default FolderComponent;
