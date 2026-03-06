import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
    },
    {
      name: "index.html",
      isFolder: false,
    }
  ]
}