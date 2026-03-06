import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "react.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
    },
  ],
};
