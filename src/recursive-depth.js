const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      let countA = 1;
        if (Array.isArray(arr[i])) {
          countA += this.calculateDepth(arr[i])
          if (count<countA) {
            count = countA;
          }
      }
    }
    return count
  }
};