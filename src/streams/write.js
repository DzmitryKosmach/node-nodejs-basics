import { createWriteStream } from "fs";

const fileName = "./files/fileToWrite.txt";

export const write = async () => {
    let writeStream = createWriteStream(fileName);
    process.stdin.pipe(writeStream);
};

write();