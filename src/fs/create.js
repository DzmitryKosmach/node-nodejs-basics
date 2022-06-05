import { access, writeFile } from "fs/promises";
import { MESSAGE_ERROR } from "./constants.js";

const file = "./files/fresh.txt";
const text = "I am fresh and young";

export const create = async () => {
  try {
    await access("file");
  } catch (error) {
    writeFile(file, text);
    return;
  }
  throw new Error(MESSAGE_ERROR);
  /*access(file)
        .then(() => console.log(log))
        .catch (() => writeFile(file, text));*/
};

create();
