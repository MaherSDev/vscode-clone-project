import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
		setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
			state.openedFile = action.payload;
		}
	},
});

export const { setOpenedFiles } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
