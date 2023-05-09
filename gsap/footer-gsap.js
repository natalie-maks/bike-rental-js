let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
  },
});

footerTl
  .fromTo(
    "footer",
    { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)", opacity: 0 },
    {
      clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
      opacity: 1,
      duration: 1.2,
    }
  )
  .fromTo("footer > div", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.7")
  .fromTo("footer > div p", { x: -10, opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo("footer > div ul li", { x: -10, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2 }, "<")
  .fromTo("footer > div form > *", { x: -10, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2 }, "<")
  .fromTo("footer > ul li", { y: -10, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, "+=0.1")
  .fromTo("footer > p", { opacity: 0 }, { opacity: 1 });
