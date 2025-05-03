$(function() { 
	/* Mobile Menu */
  var menu = document.getElementById("headerMobile");
  var openMenu = document.getElementById("headerBurger");
  var closeMenu = document.getElementById("burgerClose");

  openMenu.onclick = function() {
    menu.style.display = "flex"; 
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  }


  closeMenu.onclick = function() {
    menu.style.display = "none"; 
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
   AOS.init();
});