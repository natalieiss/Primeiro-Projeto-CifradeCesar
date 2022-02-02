const cipher = {
  
  encode: (offset, text) => {
    let textCipher = "";
    let letters = text.length;
    for (let i = 0; i < letters; i++) {
      let asciiNum = text.charCodeAt(i); // pega o codigo corresnpondente a tabela ASC referente as letras digitadas
      let codeAscii = 65; //corresponde a letra A na tabela ASCII
      if (asciiNum >= 65 && asciiNum <= 90) { // retorna apenas o alfabeto maiúsculo
        let encodeValue = ((asciiNum + codeAscii + offset)) % 26 + codeAscii; //calculo para cifrar
        textCipher = textCipher + String.fromCharCode(encodeValue); //faz o contrario de charcodeat e ao inves de retornar o valor da tabela ascii retorna a letra
      } else {
        textCipher = textCipher + String.fromCharCode(asciiNum); //por que esse else?
      }

    }

    return textCipher;
  },

  decode: (offset, text) => {

    let textDecipher = "";
    let letters = text.length;
    for (let i = 0; i < letters; i++) {
      let asciiNum = text.charCodeAt(i);
      let codeAscii = 90;
      if (asciiNum <= 90 && asciiNum >= 65) {
        let decodeValue = ((asciiNum - codeAscii - offset)) % 26 + codeAscii; //calculo p/ decifrar
        textDecipher = textDecipher + String.fromCharCode(decodeValue);
      } else {
        textDecipher = textDecipher + String.fromCharCode(asciiNum);
      }

    }

    return textDecipher;
  }  
    }

export default cipher;
