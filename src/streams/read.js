import { createReadStream } from "fs";

const fileName = "./files/fileToRead.txt";

export const read = async () => {
  let readStream = createReadStream(fileName);
  readStream.on("open", () => {
    readStream.pipe(process.stdout);
  });
};

read();
