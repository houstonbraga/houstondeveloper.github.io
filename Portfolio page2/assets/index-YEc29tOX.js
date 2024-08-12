(function(){
    const s=document.createElement("link").relList;
    if(s&&s.supports&&s.supports("modulepreload"))return;
    for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);
    new MutationObserver(e=>{
        for(const r of e)
            if(r.type==="childList")
                for(const a of r.addedNodes)
                    a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)
    }).observe(document,{childList:!0,subtree:!0});
    function t(e){
        const r={};
        return e.integrity&&(r.integrity=e.integrity),
        e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),
        e.crossOrigin==="use-credentials"?r.credentials="include":
        e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",
        r
    }
    function i(e){
        if(e.ep)return;
        e.ep=!0;
        const r=t(e);
        fetch(e.href,r)
    }
})();
document.querySelector("#app").innerHTML=`
<div class="wrapper">
    <div class="content">
        <header class="hero-section">
            <img data-speed=".6" class="hero" src="images/tec2.svg" alt="main hero's face">
            <div class="container">
                <div data-speed=".75" class="main-header">
                    <h1 class="main-title">PROJETOS REALIZADOS</h1>
                </div>
            </div>
        </header>

        <div class="portfolio">
            <div class="container">
                <main class="gallery">
                    <div data-speed=".9" class="gallery__left">
                        <img class="gallery__item" src="images/work/1.jpg" alt="alt">
                        <div class="text-block gallery__item">
                            <h2 class="text-block__h">Template de web site de studio de tatuagem</h2>
                            <p class="text-block__p">O propósito desse projeto é mostrar pra o público e clientes "Underground" que trabalho com web sites e landing pages, obtendo bons resultados entre diversos tipos de nichos. Esse web site fictício representa uma indentidade forte do Dark tattoo. </p>
                        </div>
                        <img class="gallery__item" src="images/work/6.jpg" alt="alt">
                    </div>
                    <div data-speed="1.1" class="gallery__right">
                        <div class="text-block gallery__item">
                            <h2 class="text-block__h">Web site para a Startup Atmos Digital</h2>
                            <p class="text-block__p">Onde são especializados em web sites e landing pages, fiz esse projeto com html, css e javascript, incluindo bibliotecas como bootstrap e gsap. A Atmos digital tem como principal objetivo, alavancar a parte digital de um negócio, trazendo modernidade e uma experiência incrível pra quem navega pelas plataformas criadas por sua equipe.</p>
                        </div>
                        <img class="gallery__item" src="images/work/3.jpg" alt="alt">
                        <div class="text-block gallery__item">
                            <h2 class="text-block__h">Portfólio Houston Braga (este site)</h2>
                            <p class="text-block__p">Meu web site foi criado com o objeto principal de ser uma "vitrine" de meus projetos principais, entre diversos, sempre coloco como destaque meus principais. Foi desenvolvido por HTML, CSS e Javascript. Também contém bibliotécas de animações como GSAP e Scrool Reveil</p>
                        </div>

                        <div class="text-block gallery__item mg-20">
                            <p class="text-block__p">Projetado para obter seguidores em minha Newsletter, uso ferramentas como Bootstrap para deixar o layout o mais perfeito possível. usando detalhes minimalistas,meu web site passa uma sensação de leveza com um toque de estilo pop com cores destacadas.</p>
                        </div>
                        
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
`;


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.isTouch !== 1 && (
    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true
    }),
    gsap.fromTo(".hero-section", { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: ".hero-section",
            start: "center",
            end: "820",
            scrub: true
        }
    }),
    gsap.utils.toArray(".gallery__left .gallery__item").forEach(t => {
        gsap.fromTo(t, { x: -50, opacity: 0 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: t,
                start: "-800",
                end: "-100",
                scrub: true
            }
        })
    }),
    gsap.utils.toArray(".gallery__right .gallery__item").forEach(t => {
        gsap.fromTo(t, { x: 50, opacity: 0 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: t,
                start: "-800",
                end: "-100",
                scrub: true
            }
        })
    })
);

