'use strict'

const addEventOnElement = function (elements, evetType, callback) {
    for (let i = 0, len = elements.lenght; i < len; i++) {
        elements[i].addEventListener(evetType, callback) ;
    }
}


/**
 * Navbar tggle for mobile
 */
const Navbar = document.querySelector("[data-navbar]"); 
const navToogleBtn = document.querySelector("[data-nav-toggle-btn]") ;
const overlay = document.querySelector("[data-overlay]");

const toogleNavbar = function () {
    navbar.classList.toogle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toogle("active");
    document.body.classList.toogle("nav-active")
}
addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

/**
 * Parallax Effect
 */

const parallaxElements = document.querySelectorAll("[data-parallax]");
window.addEventListener("mousemove", Event)