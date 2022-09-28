// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header button");

menuButton.addEventListener("click", menuToggle);

function menuToggle() {
    var deNav = document.querySelector ("header > nav");

    deNav.classList.toggle("open");
}