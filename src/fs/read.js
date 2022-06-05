import { createReadStream, constants } from "fs";
import { access } from "fs/promises";
import readline from "readline";
import { MESSAGE_ERROR } from "./constants.js";

const fileName = "./files/fileToRead.txt";

export const read = async () => {
  access(fileName).catch(() => {
    throw Error(MESSAGE_ERROR);
  });

  const file = readline.createInterface({
    input: createReadStream(fileName),
    output: process.stdout,
    terminal: false,
  });

  file.on("line", (line) => {
    console.log(line);
  });
};

read();
