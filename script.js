let bars = document.querySelector(".bars");
let text = document.querySelector(".textoP");

function hide() {
    text.classList.toggle("hide");
}


bars.onclick = function() {
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    hide();
}