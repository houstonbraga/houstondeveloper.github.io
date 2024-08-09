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

 
 
     // Registra o plugin ScrollSmoother
     gsap.registerPlugin(ScrollSmoother);

     // Cria uma instância do ScrollSmoother
     ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.8,  // Define a suavização da rolagem
        effects: true // Habilita efeitos adicionais
     });
 