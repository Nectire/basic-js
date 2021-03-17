const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
      let newarr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
          i++;
          if (arr[i + 1] == '--double-prev' || arr[i + 1] == '--discard-prev') {
            i++;
          }
        }
        else if (arr[i] === '--discard-prev') {
            if (arr.length !== 0) {
              newarr.pop();
            }
          }
          else if (arr[i] === '--double-next') {
              if (i + 1 < arr.length) {
                newarr.push(arr[i + 1]);
              }
            }
            else if (arr[i] === '--double-prev') {
                if (i !== 0) {
                  newarr.push(arr[i - 1]);
                }
              }
          else {
              newarr.push(arr[i]);
          }
            
        }
        return newarr;
        
  }
  
  throw new Error
};
