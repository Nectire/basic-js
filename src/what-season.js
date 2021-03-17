const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date == 'object' && date.getTime()) {
      let month = date.getMonth();
      let str = '';
      (month <= 1 || month == 11) ? str = 'winter' : 'THROWN';
      (month <= 4 && month >= 2) ? str = 'spring' : 'THROWN';
      (month <= 7 && month >= 5) ? str = 'summer' : 'THROWN';
      (month <= 10 && month >= 8) ? str = 'autumn' : 'THROWN';
      return str;
  }
  return 'Unable to determine the time of year!'
};
