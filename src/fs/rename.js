import { rename as renamePromise} from "fs/promises";
import { MESSAGE_ERROR } from "./constants.js";

const properFilename = "./files/properFilename.md";
const wrongFilename = "./files/wrongFilename.txt";

export const rename = async () => {
  renamePromise(wrongFilename, properFilename)
  .catch(() => {
    throw Error(MESSAGE_ERROR);
  });
};

rename();
