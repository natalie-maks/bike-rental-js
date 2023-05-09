gsap.to("body", { opacity: 100 });

let pageTl = gsap.timeline({ delay: 0.5 });

pageTl
  .fromTo(
    ".page-header",
    { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)", opacity: 0 },
    { clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)", opacity: 1, duration: 1.5 }
  )
  .fromTo("nav", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
  .fromTo(
    ".page-header div svg",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power1.out" },
    "<"
  )
  .fromTo("h1", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, "-=0.5")
  .fromTo(".page-header div div p", { y: -40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.3")
  .fromTo(".page-header div div a", { y: -30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.3");

gsap.fromTo(
  "section#how-works h2",
  { scale: 1.1, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section#how-works",
      start: "top 80%",
    },
  }
);
gsap.fromTo(
  "section#how-works li",
  { y: -40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    delay: 1,
    scrollTrigger: {
      trigger: "section#how-works",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  "section#offer h2",
  { scale: 1.1, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section#offer",
      start: "top 80%",
    },
  }
);
gsap.fromTo(
  "section#offer p",
  { y: -40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    delay: 1,
    scrollTrigger: {
      trigger: "section#offer",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  "section#includes h2",
  { scale: 1.1, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section#includes",
      start: "top 80%",
    },
  }
);
gsap.fromTo(
  "section#includes li",
  { y: -40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    delay: 1,
    scrollTrigger: {
      trigger: "section#includes",
      start: "top 80%",
    },
  }
);

let howChooseTl = gsap.timeline({
  scrollTrigger: {
    trigger: "section#how-choose",
    start: "top 80%",
  },
});

howChooseTl
  .fromTo(
    "section#how-choose h2",
    { scale: 1.1, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1 }
  )
  .fromTo("section#how-choose p:nth-of-type(1)", { y: -40, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("section#how-choose li", { y: -40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 })
  .fromTo("section#how-choose p:nth-of-type(2)", { y: -40, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("section#how-choose a", { y: -40, opacity: 0 }, { y: 0, opacity: 1 });

let dailyHireTl = gsap.timeline({
  scrollTrigger: {
    trigger: "section#daily-hire",
    start: "top 80%",
  },
});

dailyHireTl
  .fromTo(
    "section#daily-hire h2",
    { scale: 1.1, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1 }
  )
  .fromTo("section#daily-hire p.section-text", { y: -40, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("section#daily-hire div", { y: -40, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("section#daily-hire h3", { y: -40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.8 })
  .fromTo(
    "section#daily-hire div div p",
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.8 },
    "<"
  );

gsap.fromTo(
  "section#faq h2",
  { scale: 1.1, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section#faq",
      start: "top 80%",
    },
  }
);
gsap.fromTo(
  "section#faq .faq",
  { y: -40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    delay: 1,
    scrollTrigger: {
      trigger: "section#faq",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  "section#contant-us h2",
  { scale: 1.1, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "section#contant-us",
      start: "top 80%",
    },
  }
);
gsap.fromTo(
  "section#contant-us p",
  { y: -40, opacity: 0 },
  {
    y: 0,
    opacity: 1,

    delay: 1,
    scrollTrigger: {
      trigger: "section#contant-us",
      start: "top 80%",
    },
  }
);
gsap.fromTo(
  "section#contant-us a",
  { y: -40, opacity: 0 },
  {
    y: 0,
    opacity: 1,

    delay: 1.6,
    scrollTrigger: {
      trigger: "section#contant-us",
      start: "top 80%",
    },
  }
);
