document.addEventListener('DOMContentLoaded', () => {
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
})



