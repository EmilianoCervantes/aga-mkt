/**
 * CAMBIO DE COLOR DEL MENU EN CLICK
 */
function cambioMenu(div) {
  const menuOptions = document.getElementsByClassName("menu-selection");
  [...menuOptions].forEach(option => {
    option.classList.remove("selected");
  });
  div.parentElement.classList.add("selected");
}

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
