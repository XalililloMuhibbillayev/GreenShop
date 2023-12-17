const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
const nav_button = document.querySelector(".nav-button");
const xmark = document.querySelector(".close-icon");

nav_button.addEventListener("click", () => body.classList.add("active"))
xmark.addEventListener("click", () => body.classList.remove("active"))
    