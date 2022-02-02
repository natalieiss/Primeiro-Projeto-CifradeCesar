const cipher = {
  
  encode: function (offset, text) {
    let textCipher = ""; 
    let letters = text.length
    for (let i = 0; i < letters; i++) {
      let asciiNum = text.charCodeAt(i) // pega o codigo corresnpondente a tabela ASC referente as letras digitadas
      let codeAscii = 65 //corresponde a letra A na tabela ASCII
      if (asciiNum >= 65 && asciiNum <= 90) { // retorna apenas o alfabeto maiúsculo
        let encodeValue = ((asciiNum + codeAscii + offset)) % 26 + codeAscii; //calculo para cifrar
        textCipher = textCipher + String.fromCharCode(encodeValue); //faz o contrario de charcodeat e ao inves de retornar o valor da tabela ascii retorna a letra
      } else { 
        textCipher = textCipher + String.fromCharCode(asciiNum);//por que esse else?
      }
    
    }
    
  return textCipher; 
  },

  decode: function (offset, text) {

    let textDecipher = "";
    let letters = text.length
    for (let i = 0; i < letters; i++) {
      let asciiNum = text.charCodeAt(i)
      let codeAscii = 90
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

/* em que lugar coloco pra transformar as letras em maiusculas???? (upperCase)
const cipher = {
  encode: (text, offsett) => {
    let textCipher = "";
    for (let i = 0; i < text.length; i++) {
      let asciiNum = text[i].charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 90) {
        asciiNum = ((asciiNum - 65 + offsett) % 26) + 65; // (código da letra + deslocamento) % tamanho do alfabeto <== a porcentagem é o módulo para retornar no inicio do alfabeto
      }
      else if (asciiNum >= 97 && asciiNum <= 122) { //se o usuário digitar letras minúsculas
        asciiNum = ((asciiNum - 97 + offsett) % 26) + 97;
      }
      textCipher += String.fromCharCode(asciiNum);
    }
    return texCipher;
  }
  ,decode: (text, offsett) => {
    let textCipherDec = "";
    for (let i = 0; i < text.length; i++) {
      let asciiNumDec = text[i].charCodeAt();
      if (asciiNumDec >= 65 && asciiNumDec <= 90){
        asciiNumDec = ((asciiNumDec + 65 - offsett) % 26) + 65 // (código da letra - deslocamento) % tamanho do alfabeto é negativo pois esta decrescendo mas o offset ja sera um valor negativo +- = -?
    }    
      else if (asciiNumDec >= 97 && asciiNumDec <= 122) {
        asciiNumDec = ((asciiNumDec - 122 + offsett) % 26) - 122 // menos ou mais? Estou confusa
      }
      textCipherDec += String.fromCharCode(asciiNumDec)
    }
    return textCipherDec
  }
  

};*/

