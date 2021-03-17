const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str +=''

  let arrWord = [];
  let arrString = [];
  typeof options.addition == 'object' ? options.addition += '' : options.addition;
  if (options.addition || typeof options.addition == 'boolean') {
    let arrAddition = [];
    if (options.additionRepeatTimes) {
      arrAddition.push(str)
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        arrAddition.push(options.addition);
        if (!options.additionSeparator) {
          arrAddition.push("|")
        } else {
          arrAddition.push(options.additionSeparator)
        }
      }
    } else {
      arrAddition.push(str)
      arrAddition.push(options.addition)
      if (!options.additionSeparator) {
        arrAddition.join("|")
      } else {
        arrAddition.join(options.additionSeparator)
      }
    }
    if (arrAddition.length > 2) {
      arrAddition.pop(arrAddition.length - 1)
    }
    str = arrAddition.join('')
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      arrWord.push(str)
    }
    if (!options.separator) {
      arrString = arrWord.join('+')
    } else {
      arrString = arrWord.join(options.separator)
    }
  } else {
    arrWord.push(str)
    if (!options.separator) {
      arrString = arrWord.join('+')
    } else {
      arrString = arrWord.join(options.separator)
    }
  }

  return arrString
};
  