//mudar de tema

const checkbox = document.getElementById("chk");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle('modo-light');
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

let btnCursos = document.getElementById('react');
//aprender novamente o forEach

btnCursos.addEventListener("click", () => {
    alert('funcionou porra');
});
    


const botoesCursos = [
    'javascript',
    'react',
    'nodeJS'
];

botoesCursos.forEach((elemento, indice, completo) => console.log(elemento, indice, completo));

//trocar imagem de EM BREVE







