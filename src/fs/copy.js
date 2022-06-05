import { cp } from "fs/promises";
import { MESSAGE_ERROR } from "./constants.js";

const folder = "./files";
const destFolder = "./files_copy";

export const copy = async () => {
  cp(folder, destFolder, {
    recursive: true,
    force: false,
    errorOnExist: true,
  }).catch(() => {
    throw Error(MESSAGE_ERROR);
  });
};

copy();
