const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const regex = /^\^\^$/;
  let swag = []
  for (let i = 0; i < matrix.length; i++) {
    let array = matrix[i];
    res = array.filter(value => {
      if (value != null && typeof value != 'number' && typeof value != 'boolean') {
        if (value.match(regex)) {
          swag.push(value)
        }
        return
      }  
    })
  }
  return swag.length
};


