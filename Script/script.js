function responsiveNav() {
    var x = document.getElementById("responsive-nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*
function parallax() {
	var $slider = document.getElementById("slider");

	var yPos = window.pageYOffset / $slider.dataset.speed;
	yPos = -yPos;
	
	var coords = '0% '+ yPos + 'px';
	
	$slider.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function(){
	parallax();	
});
*/

