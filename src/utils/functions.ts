import type { IFile } from "../interfaces";

export const doesFileObjExist = (arr: IFile[], id: string) => {
	return arr.some((file) => file.id === id);

}