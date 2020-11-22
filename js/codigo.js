let menu = document.querySelector("#menu");
let toggleIicon = document.querySelector("#toggle-menu-icon");
let G = document.querySelector("#ghost");


toggleIicon.addEventListener("click", function() {
    menu.classList.toggle("menu-on");
});

G.addEventListener("click", function() {
    location.href="index.html"
});

