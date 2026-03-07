import { createSlice } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  fileContent: string;
}

interface IInitialState {
  openedFile: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFile: [],
  clickedFile: {
    filename: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {},
});

export default fileTreeSlice.reducer;
