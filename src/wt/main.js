import { cpus } from "os";
import { Worker } from "worker_threads";

const logicalCpuCores = cpus().length;
const fileNameWorker = "./worker.js";
const startNumber = 10;
let array = new Array(logicalCpuCores);

export const performCalculations = async () => {
  let currentNumber = startNumber;
  for (let n = 0; n < logicalCpuCores;  n++) {
    runWorker(currentNumber);    
    ++currentNumber;
  }
  setTimeout(() => {
    console.log('Result array:')
    for(let i = 0; i < array.length; i++){
      console.log(i + " = " +(JSON.stringify(array[i])));
    }
  }, 1000);
};

function runWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(fileNameWorker, { workerData });
    worker.on("message", msg => {
      let index = Number(msg.wd) - startNumber;
      array[index] = {status: msg.status, data: msg.result};
      resolve;
    });
    worker.on("error", err => {
      reject;
    });
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

performCalculations();
