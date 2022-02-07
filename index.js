import cipher from './cipher.js';

const messagePollination = document.getElementById("idFirstFrase").style.display = 'none';
const messageDepollination = document.getElementById("idSecondFrase").style.display = 'none';

function fraseApear(){
  if (messagePollination){
    document.getElementById("idFirstFrase").style.display = 'block';
  }else {
    (messagePollination);
  }
}

function fraseApear2(){
  if (messageDepollination){
    document.getElementById("idSecondFrase").style.display = 'block';
  }else {
    (messageDepollination);
  }
}

function pollination() {

  let text = document.getElementById("text").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
  document.getElementById("textResult").value = cipher.encode(offset, text);
}


function depollination() {
  let text = document.getElementById("text").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);

  document.getElementById("textResult").value = cipher.decode(offset, text);
}


function retornarAColmeia() {
  document.getElementById("idFirstFrase").style.display = 'none';
  document.getElementById("idSecondFrase").style.display = 'none';
  document.getElementById("text").value = "";
  document.getElementById("textResult").value = "";
  document.getElementById("offset").value = "1";
}

document.getElementById('buttonPollination').addEventListener("click", pollination);
document.getElementById('buttonDepollination').addEventListener("click", depollination);
document.getElementById('buttonReturnColmeia').addEventListener("click", retornarAColmeia);
document.getElementById('buttonPollination').addEventListener("click", fraseApear);
document.getElementById('buttonDepollination').addEventListener("click", fraseApear2);