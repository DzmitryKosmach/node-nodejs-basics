import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const archiveName = "./files/archive.gz";
const fileName = "./files/fileToCompress.txt";

export const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(archiveName);
  const destination = createWriteStream(fileName);
  await pipeline(source, unzip, destination);
};

decompress();
