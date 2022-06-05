export const parseArgs = () => {
  let isValue = false;
  let resultString = "";
  process.argv.forEach((val) => {
    if (isValue) {
      resultString += ` is ${val}`;
      isValue = false;
      return;
    }

    if (/--\w+/.test(val)) {
      if (resultString.length > 0) {
        resultString += ", ";
      }
      resultString += val.slice(2);
      isValue = true;
    }    
  });
  console.log(resultString);   
};

parseArgs();
