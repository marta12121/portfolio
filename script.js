// const nodes = document.getElementById("cards");
// const el = nodes.getElementsByClassName("card");


// for (let i = 0; i < element.length; i++) {
//     nodes.getElementsByClassName("card")[i].onmousemove = function myMove() {
//         element[i].style.transform = "rotateY(360deg)";
//         element[i].style.transition = "5s";
//         element[i].style.transitionDelay = "0.5s";
//     }
// }

// document.getElementById("card1").onclick = function() {
//     document.getElementById("card1").style.background = 'linear-gradient(143.15deg, rgba(97,0,255, 0.5) 8.37%, rgba(0, 255, 255, 0.4) 94.49%)';
//     document.getElementById("card1_h5").style.display = 'block';
//     document.getElementById("card1_p").style.display = 'block';
//     document.getElementById("card1_a").style.display = 'block';
// }


// const fadeIn = (el, timeout, display) => {
//     el.style.opacity = 0;
//     el.style.display = display || 'block';
//     el.style.transition = `opacity ${timeout}ms`;
//     setTimeout(() => {
//         el.style.opacity = 1;
//     }, 10);
// };
// const block = document.querySelector('.block');
// const btn = document.querySelector('.btn');

// let flag = false;

// btn.addEventListener('click', (e) => {
//   if (!flag) {
//     fadeIn(block, 1000, 'flex');
//     flag = true;
//   } else {
//     fadeOut(block, 1000);
//     flag = false;
//   }
// });