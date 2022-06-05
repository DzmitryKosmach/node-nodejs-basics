process.env.RSS_name1 = "value1"
process.env.RSS_name2 = "value2"

export const parseEnv = () => {
  let resultString = "";
  for (let val in process.env){
    if(/RSS_\w+/.test(val)) {
      if(resultString.length>0){
        resultString +="; "
      }
      resultString += `${val}=${process.env[val]}`;
    }    
  }
    console.log(resultString);
};

parseEnv();
