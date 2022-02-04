const cipher = {

  encode: (offset, text) => {
    if (Number(text) || text == "" || text == null || offset == "" || offset == null) {
      alert("ERRO: use apenas letras no campo de mensagens que a abelhinha ira carregar e não deixe o campo de mensagens em branco");
      throw new TypeError("ERRO:", "cipher.js", 4);
    }
    let textCipher = "";
    let letters = text.length;
    for (let i = 0; i < letters; i++) {
      let asciiNum = text.charCodeAt(i); // pega o codigo corresnpondente a tabela ASC referente as letras digitadas
      let codeAscii = 65; //corresponde a letra A na tabela ASCII
      if (asciiNum >= 65 && asciiNum <= 90) { // retorna apenas o alfabeto maiúsculo
        let encodeValue = ((asciiNum + codeAscii + offset)) % 26 + codeAscii; //calculo para cifrar
        textCipher = textCipher + String.fromCharCode(encodeValue); //faz o contrario de charcodeat e ao inves de retornar o valor da tabela ascii retorna a letra
      } else {
        textCipher = textCipher + String.fromCharCode(asciiNum); //ele ser para acrescentar algo que não seja modificado
      }

    }
    return textCipher;
  },

  decode: (offset, text) => {
    if(Number(text) || text == "" || text == null || offset == "" || offset == null){ 
      alert("ERRO: use apenas letras no campo de mensagens que a abelhinha ira carregar e não deixe o campo de mensagens em branco");  
      throw new TypeError("ERRO:", "cipher.js", 4);
    }
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
