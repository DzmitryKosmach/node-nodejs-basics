import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  try {
    let result = nthFibonacci(workerData);
    let sendResult = {wd: workerData, result: result, status: 'resolved'};    
    parentPort.postMessage(sendResult);
  } catch (error) {    
    let errorMessage =  {wd: workerData, result: null, status: 'error'};
    parentPort.postMessage(errorMessage);
  }
  
};

sendResult();
