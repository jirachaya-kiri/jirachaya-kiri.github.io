/*
to do: 
- black arrows
- stuff showing up in general
*/

 //name pronunciation appearing
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow")
let hoverButton = document.getElementById("hover-for");

function pronunciationAppears() {
    document.getElementById("hover-for").style.color = "#1b1b1b";

    document.getElementById("pronunc-ji").classList.remove('hidden');
    document.getElementById("pronunc-ki").classList.remove('hidden');
    leftArrow.classList.remove('hidden');
    leftArrow.style.animation = "left-arrow-rotate 1s ease 0s 1 normal, arrowColors 30s linear 0s infinite forwards;";
    rightArrow.classList.remove('hidden');
    rightArrow.style.animation = "right-arrow-rotate 1s ease 0s 1 normal, arrowColors 30s linear 0s infinite forwards;";
    document.getElementById("down-arrow").style.animation = "MoveUpDown 1s ease 3s 2 alternate";
    hoverButton.style.animation = "fadeIn 2s ease 1.5s 1 forwards";

}

hoverButton.onmouseover = pronunciationAppears;

//hover over project title/image
function projUnhighlight() {
    img1.style.backgroundColor = "white";
    img1.style.boxShadow = "none";
    img2.style.backgroundColor = "white";
    img2.style.boxShadow = "none";
    img3.style.backgroundColor = "white";
    img3.style.boxShadow = "none";
    title1.style.fontSize = "36pt";
    title1.style.textShadow = "none";
    arrow1.style.animation = "none";
    title2.style.fontSize = "36pt";
    title2.style.textShadow = "none";
    arrow2.style.animation = "none";
    title3.style.fontSize = "36pt";
    title3.style.textShadow = "none";
    arrow3.style.animation = "none";
}

let img1 = document.getElementById("img-1");
let title1 = document.getElementById("title-1");
let arrow1 = document.getElementById('arrow1');

/*function projHighlight(img, title, arrow, color, oddOrEvenArrowRotate) {
    img.style.backgroundColor = color;
    img.style.boxShadow = "0 0 30px" + color;
    img.style.mixBlendMode = "darken";
    //title1.style.fontSize = "38pt";
    title.style.textShadow = "0 0 20px" + color;
    arrow.style.animation = oddOrEvenArrowRotate + "1s linear 0s infinite alternate";
}
img1.onmouseout = projUnhighlight;
title1.onmouseout = projUnhighlight;
img1.onmouseover = projHighlight(img1, title1, arrow1, "#FF8D8D", "oddArrowRotate");
title1.onmouseover = projHighlight(img1, title1, arrow1, "#FF8D8D", "oddArrowRotate");
*/

function proj1Highlight() {
    img1.style.backgroundColor = "#FF8D8D";
    img1.style.boxShadow = "0 0 30px #FF8D8D";
    img1.style.mixBlendMode = "darken";
    //title1.style.fontSize = "38pt";
    title1.style.textShadow = "0 0 20px #FF8D8D";
    arrow1.style.animation = "oddArrowRotate 1s linear 0s infinite alternate";

}

img1.onmouseover = proj1Highlight;
img1.onmouseout = projUnhighlight;
title1.onmouseover = proj1Highlight;
title1.onmouseout = projUnhighlight;


let img2 = document.getElementById("img-2");
let title2 = document.getElementById("title-2");
let arrow2 = document.getElementById('arrow2');

function proj2Highlight() {
    img2.style.backgroundColor = "#FFC3E0";
    img2.style.boxShadow = "0 0 30px #FFC3E0";
    img2.style.mixBlendMode = "darken";
    //title2.style.fontSize = "38pt";
    title2.style.textShadow = "0 0 20px #FFC3E0";
    arrow2.style.animation = "evenArrowRotate 1s linear 0s infinite alternate";
}

img2.onmouseover = proj2Highlight;
img2.onmouseout = projUnhighlight;
title2.onmouseover = proj2Highlight;
title2.onmouseout = projUnhighlight;

let img3 = document.getElementById("img-3");
let title3 = document.getElementById("title-3");
let arrow3 = document.getElementById('arrow3');

function proj3Highlight() {
    img3.style.backgroundColor = "#3e7ca0";
    img3.style.boxShadow = "0 0 30px #3e7ca0";
    img3.style.mixBlendMode = "darken";
    //title3.style.fontSize = "38pt";
    title3.style.textShadow = "0 0 20px #3e7ca0";
    arrow3.style.animation = "oddArrowRotate 1s linear 0s infinite alternate";
}

img3.onmouseover = proj3Highlight;
img3.onmouseout = projUnhighlight;
title3.onmouseover = proj3Highlight;
title3.onmouseout = projUnhighlight;

//scroll and have things show up
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

