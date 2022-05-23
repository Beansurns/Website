let toggled = false;

document.getElementByClassName("search-bar").click(function() {
  if (toggled) {toggled = false;} else {toggled = true;}
  document.getElementByClassName("glass-icon-c").classList.toggle("active").delay(700).classList.toggle("flash");
});

document.getElementByClassName("search-bar").addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (toggled) {
    toggled = false;
    document.getElementByClassName("glass-icon-c").classList.toggle("active").delay(700).classList.toggle("flash");
  }
});