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
  .fromTo("main section p", { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
  .fromTo(
    "main section .contact-us",
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    "-=0.2"
  )
  .fromTo("table", { opacity: 0 }, { opacity: 1 });

const trs = document.querySelectorAll("tr");

trs.forEach((tr) => {
  gsap.fromTo(
    tr,
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: tr,
        start: "center 80%",
      },
    }
  );
});
