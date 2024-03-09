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
    typescript: document.getElementById('typescript'),
    uxui: document.getElementById('uxui'),
    web: document.getElementById('web')
};

let conteudo = document.querySelectorAll('.img-curso');



btnCursos.react.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/reactcurso.png'
    })
});

btnCursos.javascript.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/javascript light.png'
    })
});

btnCursos.nodejs.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/nodecurso.png'
    })
});

btnCursos.typescript.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/typescript.png'
    })
});

btnCursos.uxui.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/uxui.png'
    })
});

btnCursos.web.addEventListener("click", () => {
    conteudo.forEach(element => {
        element.src = 'img/webcurso.png'
    })
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
    document.querySelectorAll('#resumo .text-about'),
    document.querySelector('#resumo .div-botoes-resumo'),
    document.querySelector('.header'),
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
    distance: '50px',
    origin: 'top',
    duration: 900
}

ScrollReveal().reveal(listaTargetResumo[1], animaScrool1);
ScrollReveal().reveal(listaTargetResumo[0], animaScrool2);
ScrollReveal().reveal(listaTargetResumo[2], animaScrool3);
ScrollReveal().reveal(listaTargetResumo[3], animaScrool4);
ScrollReveal().reveal(listaTargetResumo[4], animaScrool5);














