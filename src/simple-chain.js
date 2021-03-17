const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (typeof value == 'undefined') {
      this.arr.push(`( ${''} )~~`)
      return this
    }
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number') {
      this.arr.splice(position - 1, 1);
      return this
    }
    this.arr = []
    throw new Error('THROWN')
    
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let result = this.arr.map(element => element).join("~~")
    this.arr = [];
    return result;
  }
};


module.exports = chainMaker;
