import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();

  // ** Files
  if (extension === "tsx") return <IconImg src="/icons/react_ts.svg" />;
  if (extension === "js") return <IconImg src="/icons/javascript.svg" />;
  if (extension === "jsx") return <IconImg src="/icons/react.svg" />;
  if (extension === "html") return <IconImg src="/icons/html.svg" />;
  if (extension === "vite") return <IconImg src="/icons/vite.svg" />;

  // ** Folders
  if (extension === "node_modules" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/icons/folder-node.svg" />
    );
  if (extension === "public" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/icons/folder-public.svg" />
    );
  if (extension === "src" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/icons/folder-src.svg" />
    );
  if (extension === "components" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-components-open.svg" />
    ) : (
      <IconImg src="/icons/folder-components.svg" />
    );

  // ** Default Folder
  if (isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-default-open.svg" />
    ) : (
      <IconImg src="/icons/folder-default.svg" />
    );

  return <FileIcon />;
};

export default RenderFileIcon;
