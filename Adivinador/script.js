var inicioJuego = document.querySelector(".boton");

var min_num= document.getElementById("menor");
var max_num= document.getElementById("mayor");

inicioJuego.addEventListener('click', function() {
    comienzoJuego(min_num, max_num);
});

function comienzoJuego(menor, mayor){

    var min= parseInt(menor.value);
    var max= parseInt(mayor.value);

    if(min==max){
        Swal.fire({
            title: 'Cuidado!', text: 'Números iguales',
            icon: 'warning', confirmButtonText: 'Ok',
            customClass: {
                popup: 'swalCont',
                title: 'swalTitle',
                actions: 'swalButton',
                confirmButton: 'swalConfirmWarning'
              }
        });
        return;
    }

    if(min>=max){
        Swal.fire({
            title: 'Cuidado!', text: 'Numero menor mas grande que el mayor, vamos a reacomodarlo',
            icon: 'warning', confirmButtonText: 'Ok',
            customClass: {
                popup: 'swalCont',
                title: 'swalTitle',
                actions: 'swalButton',
                confirmButton: 'swalConfirmWarning',
              }
          });
        var aux=0;
        aux=min;
        min=max;
        max=aux;
        menor.value=min;
        mayor.value=max;
        return;
    }
       
    if(min<=0 || max<=0){
        Swal.fire({
            title: 'Error!', text: 'No numeros negativos o iguales a cero',
            icon: 'error', confirmButtonText: 'Ok',
            customClass: {
                popup: 'swalCont',
                title: 'swalTitle',
                actions: 'swalButton',
                confirmButton: 'swalConfirm',
              }
          });
        menor.value=1;
        return;
    }

    ocultar(menor, mayor);

    var numeroGenerado = getRndInteger(min, max);
    var valormin= document.getElementById("numero");
    valormin.value=min;
    valormin.min=min;
    valormin.max=max;

    var adivina = document.querySelector(".adivinar");
    adivina.addEventListener('click', function() {
        jugar(numeroGenerado, valormin, min ,max);
    });
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function jugar(ran, valor, min, max){

    var num= parseInt(valor.value);

    if(num<min){
        Swal.fire({
            title: 'Error!', text: 'Número no permitido, no debe ser menor que '+min,
            icon: 'error', confirmButtonText: 'Ok',
            customClass: {
                popup: 'swalCont',
                title: 'swalTitle',
                actions: 'swalButton',
                confirmButton: 'swalConfirm',
              }
          });
        valor.value=min;
        return;
    }else if(num>max){
        Swal.fire({
            title: 'Error!', text: 'Número no permitido, no debe ser mayor que: '+max,
            icon: 'error', confirmButtonText: 'Ok',
            customClass: {
                popup: 'swalCont',
                title: 'swalTitle',
                actions: 'swalButton',
                confirmButton: 'swalConfirm',
              }
          });
        valor.value=max;
        return;
    }

    if(num==ran){
        document.getElementById("resultado").innerHTML="Has ganado el número es: "+ran;
        ganaJuego();
        
    }else{
        document.getElementById("resultado").innerHTML="Sigue intentando";
        document.getElementById("resultado").style.color="red";
        document.getElementById("numero").value="";
        return;
    }
}

function ocultar(menor, mayor){
    document.getElementById("texto").innerHTML = "Escóge un número entre: "+menor.value+" y "+mayor.value;
    document.getElementById("juego").style.display="inline"
    document.getElementById("seleccionar").style.display="none"
    document.querySelector(".selecionarNumeros").style.padding="0px";
    inicioJuego.style.display="none";
}

function reinicio(){
    location.reload();
}

function ganaJuego(){
    
    document.querySelector(".reinicio").onclick= reinicio;
    document.querySelector(".reinicio").style.display="inline";
    document.getElementById("resultado").style.color="green";
    document.querySelector(".adivinar").style.display="none";
    document.getElementById("juego").style.display="none"
    document.getElementById("texto").style.display="none"
    document.getElementById("video").play();
    document.getElementById("audio").play();
}