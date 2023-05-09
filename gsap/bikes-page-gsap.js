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
  .fromTo("section", { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
  .fromTo("div.container", { opacity: 0 }, { opacity: 1 });

const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: article,
      start: "center 80%",
    },
  });

  let h2 = article.querySelector("h2");
  let p = article.querySelector("p");
  let a = article.querySelectorAll("a");
  let img = article.querySelector("img");

  tl.fromTo(img, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 })
    .fromTo(h2, { y: -50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4")
    .fromTo(p, { y: -70, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.3")
    .fromTo(a, { y: -50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, "-=0.3");
});
