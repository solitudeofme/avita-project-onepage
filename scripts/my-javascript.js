$('a#top-header__open-close').click(function () {
    $('#overlay-menu').addClass('show');
})
$('#overlay-menu i.fa-close').click(function () {
    $('#overlay-menu').removeClass('show');
})
function updatePlaceholder() {
  const input = document.querySelector("#search-input");

  if (window.innerWidth <= 720) {
    input.setAttribute("placeholder", "جست و جو در خدمات");
  } 
}
window.addEventListener("load", updatePlaceholder);
window.addEventListener("resize", updatePlaceholder);