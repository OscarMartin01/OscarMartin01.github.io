//INFORMACIÓN ESTUDIOS

function infoIn1(){
    document.getElementById("descStudy").innerHTML = "Universidad Cooperativa de Colombia <br> Ingeniería Electrónica";
    document.getElementById("descStudy").style.opacity="1";
    document.getElementById("descStudy").style.transition="2000ms";
}

function infoIn2(){
    document.getElementById("descStudy").innerHTML = "Udemy <br>Máster en JavaScript: Aprender JS, jQuery, Angular, NodeJS";
    document.getElementById("descStudy").style.transition="2000ms";
    document.getElementById("descStudy").style.opacity="1";
}

function infoIn3(){
    document.getElementById("descStudy").innerHTML = "Universidad Nacional de Colombia y MINTIC <br>Diplomado Ciclo 2 (Java y MySQL)";
    document.getElementById("descStudy").style.opacity="1";
    document.getElementById("descStudy").style.transition="2000ms";
}

function infoOut(){
    document.getElementById("descStudy").innerHTML = "";
    document.getElementById("descStudy").style.transition="2ms";
    document.getElementById("descStudy").style.opacity="0";
}

//INFORMACiÓN WEBSITES
$(document).ready(function(){
var website=[
    {
        image: 'encriptador.png',
        name: 'Encriptador',
        link: 'https://oscarmartin01.github.io/Encriptador/',
        linkGit: 'https://github.com/OscarMartin01/OscarMartin01.github.io/tree/main/Encriptador',
        description: 'Encriptador'
    },
    
    
];
    
    website.forEach((value, index)=>{
        var post=`
        
        <article class="item">
            <img src="img/${value.image}" alt="${value.description}">
            <p class="name">${value.name}</p>
            <p class="link"><a href="${value.link}">Visitar</a></p>
            <p class="git"><a href="${value.linkGit}">Github</a></p>
        </article>
        `;
        $('.websites').append(post)
    });


    var other=[
        {
            image: 'java_project.png',
            name: 'Reto 1 - Flores',
            linkGit: 'https://github.com/OscarMartin01/flores',
            description: 'Java Project'
        },
        {
            image: 'java_project.png',
            name: 'Reto 2 - Vehiculos',
            linkGit: 'https://github.com/OscarMartin01/vehiculosjava',
            description: 'Java Project'
        },
        {
            image: 'java_project.png',
            name: 'Reto 3 - Figuras',
            linkGit: 'https://github.com/OscarMartin01/figuras',
            description: 'Java Project'
        },
        {
            image: 'java_project.png',
            name: 'Reto 4 - Reservas(MySQL)',
            linkGit: 'https://github.com/OscarMartin01/restauranteSQL',
            description: 'Java Project'
        },
        {
            image: 'java_project.png',
            name: 'Reto 5 - Ferreteria',
            linkGit: 'https://github.com/OscarMartin01/ferreteriajava',
            description: 'Java Project'
        },
        
    ];
        
        other.forEach((value, index)=>{
            var post=`
            
            <article class="item2">
                <img src="img/${value.image}" alt="${value.description}">
                <p class="name2">${value.name}</p>
                <p class="git2"><a href="${value.linkGit}">Github</a></p>
            </article>
            `;
            $('.otherProyects').append(post)
        });
    });


    //SCROLL

    var links= document.querySelectorAll(".scrollto");
    links.forEach((item)=>{
        item.addEventListener("click",()=>{
            const yOffset = -45; 
            const scrollanimado= document.getElementById(item.getAttribute("data-link"));
            const y = scrollanimado.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        });
    });


    //MENU
    
    document.getElementById("start").onclick = function() {cerrar()};
    document.getElementById("sobreMi").onclick = function() {cerrar()};
    document.getElementById("estudios").onclick = function() {cerrar()};
    document.getElementById("lenguajes").onclick = function() {cerrar()};
    document.getElementById("proyectos").onclick = function() {cerrar()};
    document.getElementById("cont").onclick = function() {cerrar()};


    function cerrar(){
        document.getElementById("check").checked = false;
    }

    
