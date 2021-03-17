const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  let regex = /\b[A-Za-z]+(\w)+\b/
  if (Array.isArray(members)) {
    members = members.map((string) => {
      if (typeof string == 'string' && string.match(regex)) {
        if (string.match(regex)) {
          string = string.match(regex)
          string = string[0][0].toUpperCase()
          return string
        }
      }
      return
    }).sort().join('')
    return members;
  }
  return false
};
