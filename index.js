document.getElementById('btnEncode').addEventListener("click", cifrar);
document.getElementById('btnDecode').addEventListener("click", decifrar);
document.getElementById('btnClear').addEventListener("click", limpar)


function cifrar () { 
  let texto = document.getElementById("message").value.toUpperCase(); //ler o texto da cx1 e transforma minusculo em maiscula
  let offset = Number(document.getElementById("offset").value); //identifica o deslocamento selecionado
      document.getElementById("txtResult").value=cipher.encode(offset, texto); //passa a msg da cx1 para a cx2
    } 


function decifrar () {
  let texto = document.getElementById("message").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
  
      document.getElementById("txtResult").value=cipher.decode(offset, texto);
    }
  

function limpar () { //resetar todos os campos
  document.getElementById("message").value="";
  document.getElementById("txtResult").value="";
  document.getElementById("offset").value="1";
}
import cipher from './cipher.js';

/* const messangerDecod = document.getElementById("letters") // const para pegar o valor de letters e gravar na variavel pra manipular no js as palavras
const offsetJs = document.getElementById("offset") // const para pegar o valor de offset no html e gravar na variavel pra manipular no js o numero escolhido
const buttonHtml = document.getElementById("send1") // const para pegar o valor de send1 (botão) e gravar na variavel
// as variaveis acima não possuem .value pois iriam capturar um valor antes mesmo dele existir

let offsetValue //variavel criada para ser manipulada na função pra agregar o valor de offsetJs
let nameValue //variavel criada para ser manipulada na função

function offsetMessangerDecode() {
    offsetValue = offsetJs.value //offsetValue e nameValue sendo manipulado para coletar os valores que o usuario ira utilizar
    nameValue = messangerDecod.value
    console.log(nameValue, offsetValue)
    cipher.code(nameValue, offsetValue)
}

buttonHtml.addEventListener('click', offsetMessangerDecode) // evento para que o botão inicie a captura das letras e numeros escolhidos pelo usuário

import cipher from './cipher.js';


/*console.log("letters1")


console.log(cipher);

console.log('') */


//usar code e decode */