window.onhashchange=function () {
  // Finding the button to expand the menu
  var el = document.querySelector(".usa-nav-primary [aria-expanded=true]");
  el.setAttribute("aria-expanded", "false");
  // Finding the dropdown that is expanded
  var list = document.querySelector(".usa-nav-primary [aria-hidden=false]");
  list.setAttribute("aria-hidden", "true");
}
