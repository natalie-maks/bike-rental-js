const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  if (menuBtn.classList.contains("open")) {
    menuList.classList.remove("hidden");
    menuList.classList.add("flex");
    setTimeout(() => {
      menuList.classList.add("open");
    }, 50);
  } else {
    menuList.classList.remove("open");
    setTimeout(() => {
      menuList.classList.add("hidden");
    }, 250);
  }
});

const faqHeaders = document.querySelectorAll(".faq .header");

faqHeaders.forEach((header) => {
  header.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("active");
  });
});
