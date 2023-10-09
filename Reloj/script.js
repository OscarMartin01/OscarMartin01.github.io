$(document).ready(function(){

        var fecha= new Date();
        var diaActual= fecha.getDate();
        var mesActual= fecha.getMonth() + 1;
        var fechaActual=new Date(mesActual+'-'+diaActual);
        const fechaInicio = new Date('03-12'), fechaInicio2 = new Date('03-26'), fechaInicio3 = new Date('04-28'), fechaInicio4 = new Date('03-24'), fechaInicio5 = new Date('04-03'), fechaInicio6 = new Date('04-03');
        const fechaFin = new Date('11-05'),    fechaFin2 = new Date('10-29'),    fechaFin3 = new Date('10-27'),    fechaFin4 = new Date('10-29'),    fechaFin5 = new Date('09-02'), fechaFin6 = new Date('09-30');
        var comp= 0, comp2=0, comp3=0, comp4=0, comp5=0, comp6=0;
        var anioActual=fecha.getFullYear();

        switch(anioActual){
            case 2024:  fechaInicio.setDate(10);
                        fechaFin.setDate(3);

                        fechaInicio2.setDate(31); 
                        fechaFin2.setDate(27);

                        fechaInicio3.setDate(26); 
                        fechaFin3.setDate(1);
                        fechaFin3.setMonth(11);

                        fechaInicio4.setDate(29);
                        fechaFin4.setDate(27);

                        fechaInicio5.setDate(8);
                        fechaFin5.getDate(7);

                        fechaInicio6.setDate(8);
                        fechaFin6.setDate(5);
                        fechaFin6.setMonth(10);
                        
                        break;

            case 2025:  fechaInicio.setDate(9);
                        fechaFin.setDate(2);

                        fechaInicio2.setDate(30); 
                        fechaFin2.setDate(26);

                        fechaInicio3.setDate(25); 
                        fechaFin3.setDate(31);

                        fechaInicio4.setDate(28);
                        fechaFin4.setDate(26);

                        fechaInicio5.setDate(7);
                        fechaFin5.setDate(6);

                        fechaInicio6.setDate(7);
                        fechaFin6.setDate(4);
                        fechaFin6.setMonth(10);

                        break;

            case 2026:  fechaInicio.setDate(8);
                        fechaFin.setDate(1);

                        fechaInicio2.setDate(29); 
                        fechaFin2.setDate(25);

                        fechaInicio3.setDate(24); 
                        fechaFin3.setDate(30);

                        fechaInicio4.setDate(27);
                        fechaFin4.setDate(25);

                        fechaInicio5.setDate(6);
                        fechaFin5.getDate(5);

                        fechaInicio6.setDate(6);
                        fechaFin6.setDate(3);
                        fechaFin6.setMonth(10);

                        break;

            case 2027:  fechaInicio.setDate(14);
                        fechaFin.setDate(7);

                        fechaInicio2.setDate(28); 
                        fechaFin2.setDate(31);

                        fechaInicio3.setDate(30); 
                        fechaFin3.setDate(29);

                        fechaInicio4.setDate(26);
                        fechaFin4.setDate(31);

                        fechaInicio5.setDate(5);
                        fechaFin5.getDate(4);

                        fechaInicio6.setDate(5);
                        fechaFin6.setDate(2);
                        fechaFin6.setMonth(10);

                        break;

            case 2029:  fechaInicio.setDate(11);
                        fechaFin.setDate(4);

                        fechaInicio2.setDate(25); 
                        fechaFin2.setDate(28);

                        fechaInicio3.setDate(27); 
                        fechaFin3.setDate(6);

                        fechaInicio4.setDate(23);
                        fechaFin4.setDate(28);

                        fechaInicio5.setDate(8);
                        fechaFin5.getDate(7);

                        fechaInicio5.setDate(9);
                        fechaFin5.getDate(1);

                        fechaInicio6.setDate(31);
                        fechaInicio6.setMonth(3);
                        fechaFin6.setDate(7);
                        fechaFin6.setMonth(10);

                        break;

            default:    break;
        }

        if(fechaInicio<=fechaActual && fechaFin>= fechaActual){
            comp=1;
        }else{
            comp=0;
        }

        if(fechaInicio2<=fechaActual && fechaFin2>= fechaActual){
            comp2=1;
        }else{
            comp2=0;
        }

        if(fechaInicio3<=fechaActual && fechaFin3>= fechaActual){
            comp3=1;
        }else{
            comp3=0;
        }

        if(fechaInicio4<=fechaActual && fechaFin4>= fechaActual){
            comp4=1;
        }else{
            comp4=0;
        }

        if(fechaInicio5<=fechaActual && fechaFin5>= fechaActual){
            comp5=0;
        }else{
            comp5=1;
        }

        if(fechaInicio6<=fechaActual && fechaFin6>= fechaActual){
            comp6=0;
        }else{
            comp6=1;
        }

        var caja=[

            { nombre: "Nueva York", diferenciaUTC: -5 + comp},
            { nombre: "Los Ángeles", diferenciaUTC: -8 + comp},
            { nombre: "Londres", diferenciaUTC: 0 + comp2} ,
            { nombre: "París", diferenciaUTC: 1 +comp2},
            { nombre: "Tokio", diferenciaUTC: 9 },
            { nombre: "Pekín", diferenciaUTC: 8 },
            { nombre: "Ciudad de México", diferenciaUTC: -6 },
            { nombre: "Buenos Aires", diferenciaUTC: -3 },
            { nombre: "Roma", diferenciaUTC: 1 + comp2},
            { nombre: "Moscú", diferenciaUTC: 3 },
            { nombre: "Toronto", diferenciaUTC: -5 + comp},
            { nombre: "Nueva Delhi", diferenciaUTC: 5.5 },
            { nombre: "Sao Paulo", diferenciaUTC: -3 },
            { nombre: "Seúl", diferenciaUTC: 9 },
            { nombre: "Singapur", diferenciaUTC: 8 },
            { nombre: "Estambul", diferenciaUTC: 3 },
            { nombre: "Sydney", diferenciaUTC: 10 + comp6 },
            { nombre: "Johannesburgo", diferenciaUTC: 2 },
            { nombre: "Bogotá", diferenciaUTC: -5 },
            { nombre: "Lima", diferenciaUTC: -5 },
            { nombre: "Madrid", diferenciaUTC: 1 + comp2},
            { nombre: "Amsterdam", diferenciaUTC: 1 + comp2},
            { nombre: "Bangkok", diferenciaUTC: 7 },
            { nombre: "Mumbai", diferenciaUTC: 5.5 },
            { nombre: "San Francisco", diferenciaUTC: -8 + comp},
            { nombre: "Chicago", diferenciaUTC: -6 + comp},
            { nombre: "Santiago", diferenciaUTC: -4 + comp5},
            { nombre: "Caracas", diferenciaUTC: -4 },
            { nombre: "Montevideo", diferenciaUTC: -4 },
            { nombre: "Lisboa", diferenciaUTC: 0 + comp2},
            { nombre: "Atenas", diferenciaUTC: 2 +1},
            { nombre: "Estocolmo", diferenciaUTC: 1 + comp2},
            { nombre: "Oslo", diferenciaUTC: 1 + comp2},
            { nombre: "Copenhague", diferenciaUTC: 1 + comp2},
            { nombre: "Viena", diferenciaUTC: 1 +comp2},
            { nombre: "Berlín", diferenciaUTC: 1 + comp2},
            { nombre: "Varsovia", diferenciaUTC: 1 + comp2},
            { nombre: "Praga", diferenciaUTC: 1 + comp2},
            { nombre: "Budapest", diferenciaUTC: 1 + comp2},
            { nombre: "Zurich", diferenciaUTC: 1 + comp2},
            { nombre: "Múnich", diferenciaUTC: 1 + comp2},
            { nombre: "Helsinki", diferenciaUTC: 2 + comp2},
            { nombre: "El Cairo", diferenciaUTC: 2 + comp3},
            { nombre: "Dubai", diferenciaUTC: 4 },
            { nombre: "Jerusalén", diferenciaUTC: 2 + comp4},
            { nombre: "Riad", diferenciaUTC: 3 },
            { nombre: "Ciudad del Cabo", diferenciaUTC: 2 },
            { nombre: "Lagos", diferenciaUTC: 1 },
            { nombre: "Casablanca", diferenciaUTC: 1 },
            { nombre: "Dakar", diferenciaUTC: 0 },
            { nombre: "Accra", diferenciaUTC: 0 },
            { nombre: "Nairobi", diferenciaUTC: 3 },
        ];

            // Ordenar el array por la propiedad "nombre" en orden ascendente
        var datos=caja.sort((a, b) => {
            const nameA = a.nombre.toUpperCase();
            const nameB = b.nombre.toUpperCase();
            
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        datos.forEach((value, index)=>{
            var post=`
                <option value="${value.nombre}, ${value.diferenciaUTC}, ${value.icon}">${value.nombre}</option>`;
            $('.zone').append(post)
        });  

        
    //-----------------------------PRINCIPAL---------------------------
    
    function actualizarReloj(offset) {
        const reloj = document.getElementById(`reloj`);
        const horaLocal = new Date();
        const horaCiudad = new Date(horaLocal.getTime() + offset * 3600000); // 3600000 ms en una hora

        const hora = horaCiudad.getUTCHours().toString().padStart(2, '0');
        const minutos = horaCiudad.getUTCMinutes().toString().padStart(2, '0');
        const segundos = horaCiudad.getUTCSeconds().toString().padStart(2, '0');

        if(document.getElementById("switch").checked == false){
            if(hora==0){
                reloj.querySelector('.hora').textContent = `${12}:${minutos}:${segundos} am`;
            }else if(hora>=13 && hora<=23) {
                reloj.querySelector('.hora').textContent = `${hora-12}:${minutos}:${segundos} pm`;
            }else{
                reloj.querySelector('.hora').textContent = `${hora}:${minutos}:${segundos} am`;
            }
        }else{
            reloj.querySelector('.hora').textContent = `${hora}:${minutos}:${segundos}`;
        }
        var bg= document.getElementById("reloj");
        fondo(hora, bg);
    }

    setInterval(() => {

        var ciudad= document.getElementById("city");
        var selected= ciudad.value;
        var dividir= selected.split(", ")
        var zona= dividir[0];
        var usoHorario= dividir[1];

        document.getElementById("zona").innerHTML= zona + "    UTC: "+ usoHorario;
        
        if(zona=="Elige ciudad"){
            document.getElementById("zona").innerHTML= zona;
            document.querySelector('.hora').innerHTML=" ";
            
            document.getElementById("reloj").style.backgroundImage="url('img/portada.png')";
            document.getElementById("reloj").style.transition=".8s";
            document.getElementById("reloj").style.backgroundPosition="center";

        }else{
            actualizarReloj(usoHorario); 
        }

    }, 1000); 

});
let elementoRepetido = false;
function fondo(hora, bg){
    
        if(hora==0){
            bg.style.backgroundImage ="url('img/medianoche.png')";
            bg.style.backgroundPosition="center";
        }else if(hora>0 && hora<=5){
            bg.style.backgroundImage ="url('img/fin-noche.png')";
            bg.style.backgroundPosition="right";
        }else if(hora>5 && hora<=8){
            bg.style.backgroundImage ="url('img/amanecer.png')";
            bg.style.backgroundPosition="left";
        }else if(hora>8 && hora<=11){
            bg.style.backgroundImage ="url('img/media-mañana.png')";
            bg.style.backgroundPosition="left";
        }else if(hora==12){
            bg.style.backgroundImage ="url('img/mediodia.png')";
            bg.style.backgroundPosition="center";
        }else if(hora>12 && hora<=15){
            bg.style.backgroundImage ="url('img/media-tarde.png')";
            bg.style.backgroundPosition="right"
        }else if(hora>15 && hora<=18){
            bg.style.backgroundImage ="url('img/atardecer.png')";
            bg.style.backgroundPosition="right";
        }else if(hora>18 && hora<=23){
            bg.style.backgroundImage ="url('img/inicio-noche1.png')";
            bg.style.backgroundPosition="left";
        }
}