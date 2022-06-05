import { Transform, pipeline } from 'stream';

const upperCaseTransform = new Transform({
  transform: function(chunk, _, callback) {
    callback(null, reverse(chunk.toString()));
  },
});

function reverse(str){
    str = str.trim();
    let array = str.split("");
    let reverseArray = array.reverse();
    let reverseString = reverseArray.join("");
    return reverseString+"\n";
}

export const transform = async () => {
    pipeline(process.stdin, upperCaseTransform, process.stdout, err => {});    
};

transform();