gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.isTouch !== 1 && (
    ScrollSmoother.create({
        wrapper: ".bodie",
        smooth: 1.5,
        effects: true
    })
);