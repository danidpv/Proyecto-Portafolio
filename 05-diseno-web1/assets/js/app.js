document.addEventListener("DOMContentLoaded", (e) => {
  let button = document.querySelector(".layout-menu-toggle");
  let aside = document.querySelector(".layout-aside");
  let bars = document.querySelector(".fa-bars");
  let xmark = document.querySelector(".fa-xmark");

  button.addEventListener("click", (e) => {
    let visible = document.querySelector(".layout-aside-visible");
    console.log("click");
    if (!visible) {
      aside.classList.add("layout-aside-visible");
      bars.style.opacity = 0;
      xmark.style.opacity = 1;
    } else {
      aside.classList.remove("layout-aside-visible");
      bars.style.opacity = 1;
      xmark.style.opacity = 0;
    }
  });
});
