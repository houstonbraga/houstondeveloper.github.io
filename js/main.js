//mudar de tema
let emBreve = document.querySelectorAll('.photo-em-breve');
const checkbox = document.getElementById("chk");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle('modo-light');
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


    




//trocar imagem de EM BREVE







