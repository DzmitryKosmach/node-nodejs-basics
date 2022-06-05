import { unlink } from "fs/promises";
import { MESSAGE_ERROR } from "./constants.js";

const fileToRemove = "./files/fileToRemove.txt";

export const remove = async () => {
    unlink(fileToRemove).catch(() => {
        throw Error(MESSAGE_ERROR);
    });
};

remove();