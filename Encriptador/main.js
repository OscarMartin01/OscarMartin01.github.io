var input = document.querySelector("input");
var code= document.getElementById("code");
var uncode= document.getElementById("uncode");
var copiar= document.getElementById("copy_btn");
var pegar= document.querySelector("#paste");
var result="";

code.onclick=coding;
uncode.addEventListener("click", uncoding);
input.onfocus=ocultar;
copiar.onclick=copy;

function mostrar(){
    document.getElementById("crypter").value = result;
    document.getElementById("crypter").style.display="block";
    document.getElementById("no-msg").style.display="none";
    document.getElementById("copy_btn").style.display="block";
    input.value="";
}

function ocultar(){
    document.getElementById("crypter").innerHTML = "";
    document.getElementById("crypter").style.display="none";
    document.getElementById("no-msg").style.display="block";
    document.getElementById("copy_btn").style.display="none";
}

function coding(){

        result = input.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        mostrar();
}

function uncoding(){

        result = input.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        mostrar();
}

function copy() {
    let copyText = document.getElementById('crypter');
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
  }
  
  
    