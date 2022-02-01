// em que lugar coloco pra transformar as letras em maiusculas???? (upperCase)
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
  

};

export default cipher;

