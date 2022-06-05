import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { rename as renamePromise } from "fs/promises";
import { pipeline } from "stream/promises";

const fileName = "./files/fileToCompress.txt";
const archiveName = "./files/archive.txt.gz";
const properArchiveName = "./files/archive.gz";

export const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(fileName);
  const destination = createWriteStream(archiveName);
  await pipeline(source, gzip, destination);
  await renamePromise(archiveName, properArchiveName);
};

compress();
