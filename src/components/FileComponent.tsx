import FileIcon from "./SVG/File";

interface IProps {
  filename: string;
}

const FileComponent = ({ filename }: IProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-1">
        <FileIcon />
      </span>
      <span>{filename}</span>
    </div>
  );
};

export default FileComponent;
