const cipher = {

  encode: (offset, text) => {
    if (Number(text) || text == "" || text == null || offset == "" || offset == null) {
      throw new TypeError("ERRO:", "cipher.js", 4);
    }
    let textCipher = "";
    const LETTERS_OF_THE_ALPHABET = text.length;
    for (let i = 0; i < LETTERS_OF_THE_ALPHABET; i++) {
      const ASCII_NUMBER = text.charCodeAt(i);
      const CODE_ASCII_LETTER_A = 65;
      const CODE_ASCII_LETTER_Z = 90;
      if (ASCII_NUMBER >= CODE_ASCII_LETTER_A && ASCII_NUMBER <= CODE_ASCII_LETTER_Z) {
        const encodeValue = ((ASCII_NUMBER + CODE_ASCII_LETTER_A + offset)) % 26 + CODE_ASCII_LETTER_A;
        textCipher = textCipher + String.fromCharCode(encodeValue);
      } else {
        textCipher = textCipher + String.fromCharCode(ASCII_NUMBER);
      }
    }
    return textCipher;
  },

  decode: (offset, text) => {
    if (Number(text) || text == "" || text == null || offset == "" || offset == null) {
      throw new TypeError("ERRO:", "cipher.js", 4);
    }
    let textDecipher = "";
    const LETTERS_OF_THE_ALPHABET = text.length;
    for (let i = 0; i < LETTERS_OF_THE_ALPHABET; i++) {
      const ASCII_NUMBER = text.charCodeAt(i);
      const CODE_ASCII_LETTER_A = 65;
      const CODE_ASCII_LETTER_Z = 90;
      if (ASCII_NUMBER <= CODE_ASCII_LETTER_Z && ASCII_NUMBER >= CODE_ASCII_LETTER_A) {
        const decodeValue = ((ASCII_NUMBER - CODE_ASCII_LETTER_Z - offset)) % 26 + CODE_ASCII_LETTER_Z;
        textDecipher = textDecipher + String.fromCharCode(decodeValue);
      } else {
        textDecipher = textDecipher + String.fromCharCode(ASCII_NUMBER);
      }

    }

    return textDecipher;
  }
}

export default cipher;
