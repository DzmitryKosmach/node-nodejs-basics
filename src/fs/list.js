import { readdir } from 'fs/promises';
import { MESSAGE_ERROR } from "./constants.js";

const dirName = "./files";

export const list = async () => {
    try {
        const files = await readdir(dirName);
        for (const file of files)
          console.log(file);
      } catch (err) {
        throw Error(MESSAGE_ERROR);
      }
};

list();