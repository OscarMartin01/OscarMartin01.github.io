var input = document.querySelector("textarea");
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

function alerta(){
    Swal.fire({
        icon: 'error',
        title: 'Su texto tiene letras acentuadas',
        text: 'Por favor retirarlas e intente de nuevo',
        showConfirmButton: false,
        timer: 1500,
        backdrop: `
            rgba(255,0,0,0.08)
        `,
        customClass: {
            title: 'title',
            htmlContainer: 'swal2body',
        }
    });
}

function coding(){
        if(input.value.includes('á') || input.value.includes('é') || input.value.includes('í') || input.value.includes('ó') || input.value.includes('ú') || input.value.includes('ü')){
        alerta();
        }else{
        result = input.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        mostrar();
        }
}

function uncoding(){
    if(input.value.includes('á') || input.value.includes('é') || input.value.includes('í') || input.value.includes('ó') || input.value.includes('ú') || input.value.includes('ü')){
        alerta();
    }else{
        result = input.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        mostrar();
    }
}

function copy() {
    let copyText = document.getElementById('crypter');
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
    Swal.fire({
        icon: 'success',
        title: 'Texto copiado',
        showConfirmButton: false,
        timer: 1500,
        width: 250,
        backdrop: `
            rgba(0,255,0,0.06)
        `,
        customClass: {
            title: 'swal2titlecopy'
          }
      })
  }
  
  
    