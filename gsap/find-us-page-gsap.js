gsap.to("body", { opacity: 100 });

let pageTl = gsap.timeline({ delay: 0.5 });

pageTl
  .fromTo(
    ".page-header",
    { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)", opacity: 0 },
    { clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)", opacity: 1, duration: 1.5 }
  )
  .fromTo("nav", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
  .fromTo("h1", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 })
  .fromTo("main > p", { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 });

function createGsapScrollTriger(element) {
  gsap.fromTo(
    element,
    { y: -20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: element,
        start: "center 70%",
      },
    }
  );
}

createGsapScrollTriger(".map");
createGsapScrollTriger("section > p");
createGsapScrollTriger("section > div");
createGsapScrollTriger("section form");

gsap.fromTo(
  "h2",
  { scale: 1.1, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.3,
    scrollTrigger: {
      trigger: "h2",
      start: "center 70%",
    },
  }
);
