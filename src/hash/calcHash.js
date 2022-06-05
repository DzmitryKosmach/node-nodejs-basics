import { createHash } from "crypto";
import { readFile } from "fs/promises";

const fileName = "./files/fileToCalculateHashFor.txt";
const algorithm = "SHA256";
const encoding = "hex";

export const calculateHash = async () => {
  const fileBuffer = await readFile(fileName);
  const hashSum = createHash(algorithm);
  hashSum.update(fileBuffer);
  const hex = hashSum.digest(encoding);
  console.log(hex);
};

calculateHash();
