const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let regex = /(^\d+)|(^\d+\.?\d+)/
  if (typeof sampleActivity == 'string' && sampleActivity.match(regex)) {
    numSampleActivity = Number(sampleActivity)
    if (numSampleActivity > 0 && numSampleActivity < 15) {
      let k = 0.693 / HALF_LIFE_PERIOD
      let t = (Math.log(MODERN_ACTIVITY / numSampleActivity)) / k
      return t = Math.ceil(t)
    }
    return false
  } 
  return false
};
