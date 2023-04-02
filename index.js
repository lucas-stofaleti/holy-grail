function expandNavbar() {
  let element = document.querySelector(".outer-grid-expanded");
  let nav = document.querySelector(".flex-nav-expanded");
  if (element) {
    element.classList.remove("outer-grid-expanded");
    nav.classList.remove("flex-nav-expanded");
  } else {
    element = document.querySelector(".outer-grid");
    nav = document.querySelector(".flex-nav");
    element.classList.add("outer-grid-expanded");
    nav.classList.add("flex-nav-expanded");
  }
}
