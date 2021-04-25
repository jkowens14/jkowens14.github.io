// This script makes the navbar stick to the top of the page when a user scrolls the page

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

// adds sticky class to navbar when top of the page reaches its position
// removes sticky clas from navbar when navbar reaches its original position
function makeStickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


window.onscroll = function () {
    makeStickyNavbar()
};