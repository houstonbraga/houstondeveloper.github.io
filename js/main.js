//SCROLL INTERACTIVE






//mudar de tema
let emBreve = document.querySelectorAll('.photo-em-breve');
const checkbox = document.getElementById("chk");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle('modo-light');
    //mudar a imagem de em breve ao mudar o tema
    emBreve.forEach(index => {
        if(document.body.classList.contains('modo-light')) {
            index.src = 'img/em breve.png';
        } else {
            index.src = 'img/em breve dark.png'
        }
    });
});

//mudar a logo ao trocar o tema

var imgAtual = "img/logo-light.png";
var imgAnterior = "img/logo.png";

function mudarLogo() {
    document.getElementById("img-logo").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
};




//botoes cursos

let btnCursos = {
    frameworks: document.getElementById('frameworks'),
    lenguages: document.getElementById('javascript'),
    dados: document.getElementById('dados'),
    design: document.getElementById('design'),
    extras: document.getElementById('extras')
};

let conteudo1 = document.getElementById('curso1');
let conteudo2 = document.getElementById('curso2');
let conteudo3 = document.getElementById('curso3');

let titulo1 = document.getElementById('titulo1');
let data1 = document.getElementById('data1');
let info1 = document.getElementById('info1');

let titulo2 = document.getElementById('titulo2');
let data2 = document.getElementById('data2');
let info2 = document.getElementById('info2');

let titulo3 = document.getElementById('titulo3');
let data3 = document.getElementById('data3');
let info3 = document.getElementById('info3');

let cursoExtra = document.querySelector('.curso3');

btnCursos.frameworks.addEventListener("click", () => {
    
    curso1.src = 'img/reactcurso.png'
    titulo1.innerText = "React JS - Dev samurai"
    data1.innerText = "- A começar -"

    curso2.src = 'img/nodecurso.png'
    titulo2.innerText = "Node JS - Udemy"
    data2.innerText = '- Jan 2023 a Dez 2023 -'
    curso2.style.filter = 'grayscale(0)';

    curso3.src = 'img/vuecurso.png'
    titulo3.innerText = 'Vue JS - Youtube'
    data3.innerText = '- A começar -'
    cursoExtra.style.display = 'flex';
    curso3.style.filter = 'grayscale(0)';
});

btnCursos.lenguages.addEventListener("click", () => {
    
    
    curso1.src = 'img/javascript light.png'
    titulo1.innerText = "Javascript - Dev samurai"
    data1.innerText = "- Em andamento -"

    curso2.src = 'img/python.png.png'
    titulo2.innerText = "Python"
    data2.innerText = '- INTERESSE -'
    curso2.style.filter = 'grayscale(1)';

    curso3.src = 'img/csharp.png'
    titulo3.innerText = 'c#'
    data3.innerText = '- INTERESSE -'
    cursoExtra.style.display = 'flex';
    curso3.style.filter = 'grayscale(1)';
});

btnCursos.dados.addEventListener("click", () => {
    

    curso1.src = 'img/postgresqlcurso.png'
    titulo1.innerText = "PostgreSql"
    data1.innerText = "- A começar -"

    curso2.src = 'img/prismacurso.png'
    titulo2.innerText = "Prisma DB"
    data2.innerText = '-INTERESSE-'
    curso2.style.filter = 'grayscale(1)';

    curso3.src = 'img/mysqlcurso.png'
    titulo3.innerText = 'mySQL'
    data3.innerText = '-INTERESSE-'
    cursoExtra.style.display = 'flex';
    curso3.style.filter = 'grayscale(1)';
});

btnCursos.design.addEventListener("click", () => {
    
    curso1.src = 'img/uxui.png'
    titulo1.innerText = "UX UI - Udemy"
    data1.innerText = "- A começar -"

    curso2.src = 'img/webcurso.png'
    titulo2.innerText = "Web design - Youtube"
    data2.innerText = 'Mar 2023 a Out 2023'
    curso2.style.filter = 'grayscale(0)';

    curso3.src = 'img/figmacurso.png'
    titulo3.innerText = 'Figma - Youtube'
    data3.innerText = 'Dez 2023 a Fev 2024'
    cursoExtra.style.display = 'flex';
    curso3.style.filter = 'grayscale(0)';
});

btnCursos.extras.addEventListener("click", () => {
    

    curso1.src = 'img/gitcurso.png'
    titulo1.innerText = "Git - Gustavo Guanabara"
    data1.innerText = "Set 2022 a Out 2022"

    curso2.src = 'img/githubcurso.png'
    titulo2.innerText = "Github - Gustavo Guanabara"
    data2.innerText = 'Set 2022 a Out 2022'
    curso2.style.filter = 'grayscale(0)';

    cursoExtra.style.display = 'none';
    
});

window.addEventListener("load", () => {
    btnCursos.frameworks.classList.add('sombra');
});

// Função para remover a sombra de todos os botões
function removerSombra() {
    for (let key in btnCursos) {
        btnCursos[key].classList.remove('sombra');
    }
}

// Adiciona evento de clique para cada botão
for (let key in btnCursos) {
    btnCursos[key].addEventListener("click", () => {
        // Remove a sombra de todos os botões
        removerSombra();

        // Adiciona a sombra apenas ao botão clicado
        btnCursos[key].classList.add('sombra');
        
        // Restante do seu código para atualizar os cursos
        // ...
    });
}




//ADICIONAR A CLASSE CORTINA NA DIV DE INFO-PROJETOS

function handleProjeto1() {
    const elementoDestino = document.getElementById('info-projeto1');
    const elementoGatilho = document.getElementById('polaroid1');
    
    elementoGatilho.addEventListener('mouseenter', function() {
        elementoDestino.style.display = 'flex';
        elementoDestino.classList.add('show');
    });

    elementoGatilho.addEventListener('mouseleave', function() {
        elementoDestino.style.display = 'none';
    });
}

// Função para o Projeto 2
function handleProjeto2() {
    const elementoDestino = document.getElementById('info-projeto2');
    const elementoGatilho = document.getElementById('polaroid2');
    
    elementoGatilho.addEventListener('mouseenter', function() {
        elementoDestino.style.display = 'flex';
        elementoDestino.classList.add('show');
    });

    elementoGatilho.addEventListener('mouseleave', function() {
        elementoDestino.style.display = 'none';
    });
}



//projeto 3
function handleProjeto3() {
    const elementoDestino = document.getElementById('info-projeto3');
    const elementoGatilho = document.getElementById('polaroid3');
    
    elementoGatilho.addEventListener('mouseenter', function() {
        elementoDestino.style.display = 'flex';
        elementoDestino.classList.add('show');
    });

    elementoGatilho.addEventListener('mouseleave', function() {
        elementoDestino.style.display = 'none';
        
    });
}

// Chame as funções para cada projeto
handleProjeto1();
handleProjeto2();
handleProjeto3();




//SCROLL INTERACTIVE

var listaTargetResumo = [
    document.querySelector('.nome-destaque'),
    document.querySelector('#resumo p'), 
    document.querySelectorAll('#resumo .text-about'),
    document.querySelector('#resumo .text-about'),
    document.querySelector('#resumo .div-botoes-resumo'),
    document.querySelector('.header'),
    document.querySelectorAll('.curso-selecionado'),
    document.querySelectorAll('.polaroid'),
    document.querySelector('.form'),
    document.querySelector('.aorela-nome')
]

var animaScroolConfigs = [
    { distance: '100px', origin: 'left', duration: 900 },
    { distance: '100px', origin: 'left', duration: 800 },
    { distance: '100px', origin: 'left', duration: 700 },
    { distance: '100px', origin: 'left', duration: 600 },
    { distance: '100px', origin: 'top', duration: 900 },
    { distance: '150px', origin: 'left', duration: 1000 },
    { distance: '1000px', origin: 'left', duration: 900 },
    { distance: '100px', origin: 'top', duration: 900 }, // Usado para indices 6 e 7
]

var targetConfigMap = {
    0: 1,
    1: 0,
    2: 2,
    3: 3,
    6: 4,
    7: 4,
    8: 5
}

for (let index in targetConfigMap) {
    let target = listaTargetResumo[index];
    let config = animaScroolConfigs[targetConfigMap[index]];
    ScrollReveal().reveal(target, config);
}

// /*================================== MODAL Cursos =================================*/
// /*============ MODAL curso1 =============*/
// let cerrar4 = document.querySelectorAll(".close-telefonos")[0];
// abrirc4 = document.querySelectorAll(".icon-info-cursos1")[0];
// modal4 = document.querySelectorAll(".telefonos")[0];
// modalc4 = document.querySelectorAll(".modal__telefonos")[0];
// img4 = document.querySelectorAll(".modal__img-telefonos")[0];

// abrirc4.addEventListener("click",function(e){
//     e.preventDefault();
//     modalc4.style.opacity="1"
//     img4.style.transform="scale(1)"
//     modalc4.style.visibility="visible"
//     modal4.classList.toggle("modals-close")
//     img4.classList.toggle("open")
// });

// cerrar4.addEventListener("click",function(){
//     modal4.classList.toggle("modals-close")
//     // img.style.transform="scale(0)"
//     // img.classList.toggle("open")
//     setTimeout(function(){
//         modalc4.style.opacity="0"
//         modalc4.style.visibility="hidden"
//     },400)
// });

// window.addEventListener("click",function(e){
//     if(e.target == modalc4){
//         modal4.classList.toggle("modals-close")
//         // img.style.transform="scale(0)"
//         // img.classList.toggle("open")
//         setTimeout(function(){
//             modalc4.style.opacity="0"
//             modalc4.style.visibility="hidden"
//         },400)
//     }
// });

// /*============ MODAL CURSO2 =============*/
// let cerrar5 = document.querySelectorAll(".close-direccion")[0];
// abrirc5 = document.querySelectorAll(".icon-info-cursos2")[0];
// modal5 = document.querySelectorAll(".direccion")[0];
// modalc5 = document.querySelectorAll(".modal__direccion")[0];
// img5 = document.querySelectorAll(".modal__img-direccion")[0];

// abrirc5.addEventListener("click",function(e){
//     e.preventDefault();
//     modalc5.style.opacity="1"
//     img5.style.transform="scale(1)"
//     modalc5.style.visibility="visible"
//     modal5.classList.toggle("modals-close")
//     img5.classList.toggle("open")
// });

// cerrar5.addEventListener("click",function(){
//     modal5.classList.toggle("modals-close")
//     // img.style.transform="scale(0)"
//     // img.classList.toggle("open")
//     setTimeout(function(){
//         modalc5.style.opacity="0"
//         modalc5.style.visibility="hidden"
//     },400)
// });

// window.addEventListener("click",function(e){
//     if(e.target == modalc5){
//         modal5.classList.toggle("modals-close")
//         // img.style.transform="scale(0)"
//         // img.classList.toggle("open")
//         setTimeout(function(){
//             modalc5.style.opacity="0"
//             modalc5.style.visibility="hidden"
//         },400)
//     }
// });

// /*============ MODAL CURSO 3 =============*/
// let cerrar6 = document.querySelectorAll(".close-horarios")[0];
// abrirc6 = document.querySelectorAll(".icon-info-cursos3")[0];
// modal6 = document.querySelectorAll(".horarios")[0];
// modalc6 = document.querySelectorAll(".modal__horarios")[0];
// img6 = document.querySelectorAll(".modal__img-horarios")[0];

// abrirc6.addEventListener("click",function(e){
//     e.preventDefault();
//     modalc6.style.opacity="1"
//     img6.style.transform="scale(1)"
//     modalc6.style.visibility="visible"
//     modal6.classList.toggle("modals-close")


//     img6.classList.toggle("open")
// });

// cerrar6.addEventListener("click",function(){
//     modal6.classList.toggle("modals-close")
//     // img.style.transform="scale(0)"
//     // img.classList.toggle("open")
//     setTimeout(function(){
//         modalc6.style.opacity="0"
//         modalc6.style.visibility="hidden"
//     },400)
// });

// window.addEventListener("click",function(e){
//     if(e.target == modalc6){
//         modal6.classList.toggle("modals-close")
//         // img.style.transform="scale(0)"
//         // img.classList.toggle("open")
//         setTimeout(function(){
//             modalc6.style.opacity="0"
//             modalc6.style.visibility="hidden"
//         },400)
//     }
// });




















