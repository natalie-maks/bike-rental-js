gsap.to("body", { opacity: 100 });

let pageTl = gsap.timeline({ delay: 0.5 });

pageTl
  .fromTo(
    ".page-header",
    { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)", opacity: 0 },
    { clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)", opacity: 1, duration: 1.5 }
  )
  .fromTo("nav", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
  .fromTo("h1", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });

const fieldsets = document.querySelectorAll("fieldset");

fieldsets.forEach((field) => {
  gsap.fromTo(
    field,
    { y: -70, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: field,
        start: "center 60%",
      },
      onComplete: function () {
        field.removeAttribute("style");
      },
    }
  );
});

gsap.fromTo(
  "main form button",
  { y: -70, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: "main form button",
      start: "center 60%",
    },
  }
);
