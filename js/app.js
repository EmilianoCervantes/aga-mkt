/**
 * Offset
 * @param {*} div 
 */
window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 140);
});

/**
 * CAMBIO DE COLOR DEL MENU EN CLICK
 */
function cambioMenu(div = null) {
  const menuOptions = document.getElementsByClassName("menu-selection");
  [...menuOptions].forEach(option => {
    option.classList.remove("selected");
  });
  if (div) {
    div.parentElement.classList.add("selected");
  }
}

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let imgActual = 1;
changeSlide = direction => {
  if (direction === 'prev') {
    imgActual -= 2;
  }
}

$("#carouselAdicionales").on('slide.bs.carousel', () => {
  imgActual++;
  if (imgActual > 6) {
    imgActual = 1;
  }
  if (imgActual < 1) {
    imgActual = 6;
  }
  document.getElementById('fuerza_3').src = `./img/materialesAdicionales3_${imgActual}.jpg`;
});