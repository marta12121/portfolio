const nodes = document.getElementById("cards");
const element = nodes.getElementsByClassName("card");


for (let i = 0; i < element.length; i++) {
    nodes.getElementsByClassName("card")[i].onmousemove = function myMove() {
        element[i].style.transform = "rotateY(360deg)";
        element[i].style.transition = "5s";
        element[i].style.transitionDelay = "0.5s";
    }
}