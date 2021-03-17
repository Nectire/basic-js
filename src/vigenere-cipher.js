const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    if (bool || bool === undefined) {
      this.machineType = 'direct';
    } else {
      this.machineType = 'reverse';
    }
  }

  encrypt(encrypt, key) {
    let word = ''
    for (let i = 0, j = 0; i < encrypt.length; i++) {
      if (typeof encrypt[i] == 'undefined') {
        return word
      }
      let currentLettter = encrypt[i]
      if (currentLettter.match(/[A-Za-z]/)) {
        if (currentLettter.charCodeAt() > 64 && currentLettter.charCodeAt() < 91) {
          let upperCase = ((currentLettter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
          word += String.fromCharCode(upperCase + 65);
        } else if (currentLettter.charCodeAt() > 96 && currentLettter.charCodeAt() < 123) {
          let lowerLetter = ((currentLettter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
          word += String.fromCharCode(lowerLetter + 97);
        }
      } else {
        word += encrypt[i]
        j--;
      }

      word = word.toUpperCase()
      j++;
    }

    return this.machineType == 'direct' ? word : word.split('').reverse().join('')
  }

  decrypt(decrypt, key) {
    let decWord = '';
    for (let i = 0, j = 0; i < decrypt.length; i++) {
      let currentLettter = decrypt[i]
      if (currentLettter.match(/[A-Z]/)) {
        let upperCase = ((currentLettter.charCodeAt() - 65) - (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        upperCase < 0 ? upperCase = (upperCase + 26) % 26 : '';
        decWord += String.fromCharCode(upperCase + 65);
      } else {
        decWord += decrypt[i]
        j--;
      }

      decWord = decWord.toUpperCase()
      j++;
    }
    return this.machineType  == 'direct' ? decWord : decWord.split('').reverse().join('')
  }
}


module.exports = VigenereCipheringMachine;
