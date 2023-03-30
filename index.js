function expandNavbar() {
  let element = document.querySelector(".outer-grid-expanded");
  if (element) {
    element.classList.remove("outer-grid-expanded");
  } else {
    element = document.querySelector(".outer-grid");
    element.classList.add("outer-grid-expanded");
  }
}
