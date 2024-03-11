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
    react: document.getElementById('react'),
    javascript: document.getElementById('javascript'),
    nodejs: document.getElementById('nodejs'),
    uxui: document.getElementById('uxui'),
    web: document.getElementById('web')
};

let conteudo = document.querySelectorAll('.img-curso');
let titulo1 = document.getElementById('titulo1');
let data1 = document.getElementById('data1');
let info1 = document.getElementById('info1');

let titulo2 = document.getElementById('titulo2');
let data2 = document.getElementById('data2');
let info2 = document.getElementById('info2');

let titulo3 = document.getElementById('titulo3');
let data3 = document.getElementById('data3');
let info3 = document.getElementById('info3');



btnCursos.react.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/reactcurso.png'
    })

    titulo1.innerText = "React JS - Dev samurai"
    data1.innerText = "- A começar -"

    titulo2.innerText = "• EM BREVE •"
    data2.innerText = '- Em breve -'

    titulo3.innerText = '• EM BREVE •'
    data3.innerText = '- Em breve -'
});

btnCursos.javascript.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/javascript light.png'
    })

    titulo1.innerText = "Javascript - Dev samurai"
    data1.innerText = "- Em andamento -"

    titulo2.innerText = "Javascript - Udemy"
    data2.innerText = '- Jan 2023 a Dez 2023 -'

    titulo3.innerText = '• EM BREVE •'
    data3.innerText = '- Em breve -'
});

btnCursos.nodejs.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/nodecurso.png'
    })

    
    titulo1.innerText = "Node JS - Dev samurai"
    data1.innerText = "- A começar -"

    titulo2.innerText = "Node JS - Udemy"
    data2.innerText = '- Jan 2023 a Dez 2023 -'

    titulo3.innerText = '• EM BREVE •'
    data3.innerText = '- Em breve -'
});

btnCursos.uxui.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/uxui.png'
    })

    
    titulo1.innerText = "UX UI - Udemy"
    data1.innerText = "- Em andamento -"

    titulo2.innerText = "• EM BREVE •"
    data2.innerText = '- Em breve -'

    titulo3.innerText = '• EM BREVE •'
    data3.innerText = '- Em breve -'
});

btnCursos.web.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/vuecurso.png'
    })

    
    titulo1.innerText = "Vue JS - Youtube"
    data1.innerText = "- A começar -"

    titulo2.innerText = "• EM BREVE •"
    data2.innerText = '- Em breve -'

    titulo3.innerText = '• EM BREVE •'
    data3.innerText = '- Em breve -'
});




//ADICIONAR A CLASSE CORTINA NA DIV DE INFO-PROJETOS

function handleProjeto1() {
    const elementoDestino = document.getElementById('info-projeto1');
    const elementoGatilho = document.getElementById('polaroid1');
    
    elementoGatilho.addEventListener('mouseenter', function() {
        elementoDestino.style.display = 'flex';
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
    document.querySelector('#resumo .text-about'),
    document.querySelector('#resumo .text-about2'),
    document.querySelector('#resumo .div-botoes-resumo'),
    document.querySelector('.header'),

    document.querySelectorAll('.curso-selecionado'),

    document.querySelectorAll('.polaroid'),

    document.querySelector('.form')

]

var animaScrool1 = {
    distance: '100px',
    origin: 'left', 
    duration: 900
}

var animaScrool2 = {
    distance: '100px',
    origin: 'left', 
    duration: 800
}

var animaScrool3 = {
    distance: '100px',
    origin: 'left', 
    duration: 700
}

var animaScrool4 = {
    distance: '100px',
    origin: 'left', 
    duration: 600
}

var animaScrool5 = {
    distance: '100px',
    origin: 'top',
    duration: 900
}

var animaScrool6 = {
    distance: '150px',
    origin: 'left',
    duration: 1000
}



ScrollReveal().reveal(listaTargetResumo[1], animaScrool1);
ScrollReveal().reveal(listaTargetResumo[0], animaScrool2);
ScrollReveal().reveal(listaTargetResumo[2], animaScrool3);
ScrollReveal().reveal(listaTargetResumo[3], animaScrool4);

ScrollReveal().reveal(listaTargetResumo[6], animaScrool5);

ScrollReveal().reveal(listaTargetResumo[7], animaScrool5);

ScrollReveal().reveal(listaTargetResumo[8], animaScrool6);


















