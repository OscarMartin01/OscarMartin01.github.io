$(document).ready(function(){

//INFORMACiÓN ESTUDIOS

    var formation=[
        {
            year: '2018',
            place: 'Universidad Cooperativa de Colombia',
            degree1: 'Ingeniería Electrónica',
            degree2: '',
            degree3: ''
        },
        {
            year: '2021',
            place: 'Udemy',
            degree1: 'Máster en JavaScript: Aprender JS, jQuery, Angular, NodeJS',
            degree2: '',
            degree3: ''
        },
        {
            year: '2022',
            place: 'Universidad Nacional de Colombia y MINTIC',
            degree1: 'Diplomado Ciclo 2 (Java y MySQL)',
            degree2: 'Diplomado Ciclo 3',
            degree3: 'Diplomado Ciclo 4B'
        },
        {
            year: '2023',
            place: 'Alura LATAM y Oracle',
            degree1: 'Formación Principiante En Programación',
            degree2: 'Formación Java Orientado A Objetos',
            degree3: 'Formación Aplicaciones Java Con Base De Datos'
        },
    
    ];
        
        formation.forEach((value, index)=>{
            var post=`
            
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <p>${value.year}</p>
                        <p class="msg">Hover me</p>
                    </div>
                    <div class="card-back">
                        <p><Strong>${value.place}</strong> <br><br> ${value.degree1}<br>${value.degree2}<br>${value.degree3}</p>
                    </div>
                </div>
            </div>
            `;
            $('.education').append(post)
        });

        formation.forEach((value, index)=>{
            var post=`
                
            <div class="card">
                <div class="tools">
                    <div class="circle">
                    <span class="red box"></span>
                    </div>
                    <div class="circle">
                    <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                    <span class="green box"></span>
                    </div>
                </div>
                <div class="card_content">
                    <p><Strong>${value.year}</strong><br><br><Strong>${value.place}</strong> <br> ${value.degree1}<br> ${value.degree2}<br> ${value.degree3}</p>
                </div>
            </div>
            `;
            $('.education_mini').append(post)
        });
    

//INFORMACiÓN WEBSITES

var website=[
    {
        image: 'encriptador.png',
        name: 'Encriptador',
        link: 'https://oscarmartin01.github.io/Encriptador/',
        linkGit: 'https://github.com/OscarMartin01/OscarMartin01.github.io/tree/main/Encriptador',
        description: 'Encriptador'
    },
    {
        image: 'reloj.png',
        name: 'Reloj',
        link: 'https://oscarmartin01.github.io/Reloj/',
        linkGit: 'https://github.com/OscarMartin01/OscarMartin01.github.io/tree/main/Reloj',
        description: 'Reloj Mundial'
    },
    {
        image: 'adivina.png',
        name: 'Adivina número',
        link: 'https://oscarmartin01.github.io/Adivinador/',
        linkGit: 'https://github.com/OscarMartin01/OscarMartin01.github.io/tree/main/Adivinador',
        description: 'Adivinador de número'
    },


];
    
    website.forEach((value, index)=>{
        var post=`
        
        <article class="item">
            <img src="img/${value.image}" alt="${value.description}">
            <p class="name">${value.name}</p>
            <div class="buttons">
                <p class="link"><a href="${value.link}">Visitar</a></p>
                <p class="git"><a href="${value.linkGit}">Github</a></p>
            </div>
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
        {
            image: 'java_project.png',
            name: 'Reto 6 - Conversor unidades',
            linkGit: 'https://github.com/OscarMartin01/Conversor-unidades',
            description: 'Java Project'
        },
        {
            image: 'java_project.png',
            name: 'Reto 7 - Hotel',
            linkGit: 'https://github.com/OscarMartin01/hotel',
            description: 'Java Project'
        },
        
        
    ];
        
        other.forEach((value, index)=>{
            var post=`
            
            <article class="item2">
                <img src="img/${value.image}" alt="${value.description}">
                <p class="name">${value.name}</p>
                <p class="git"><a href="${value.linkGit}">Github</a></p>
            </article>
            `;
            $('.otherProyects').append(post)
        });
    });


    //SCROLL

    var links= document.querySelectorAll(".scrollto");
    links.forEach((item)=>{
        item.addEventListener("click",()=>{
            const yOffset = -40; 
            const scrollanimado= document.getElementById(item.getAttribute("data-link"));
            const y = scrollanimado.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        });
    });


    //MENU

    var menu= document.querySelectorAll("#start, #sobreMi, #estudios, #lenguajes, #proyectos, #cont");
    
    for (var i = 0; i < menu.length; i++) {
        var card = menu[i];
        card.onclick = function() {
            document.getElementById("check").checked = false;
        };
      };


    
