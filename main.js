let stars1 = document.getElementById("stars1");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
// let mountains7 = document.getElementById("mountains7");
let ola = document.querySelector(".ola")
console.log(stars1)
console.log(moon2)
console.log(mountains3)
console.log(mountains4)
console.log(river5)
console.log(boat6)
// console.log(mountains7)
console.log(ola)

window.onscroll = function () {
    let value = scrollY;
    // console.log(value);
    stars1.style.left = value + "px";
    moon2.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river5.style.top = value + "px";
    boat6.style.top = value + "px";
    boat6.style.left = value * 3 + "px";

    ola.style.fontSize = value + "px";
    if (scrollY >= 67) {
        ola.style.fontSize = 67 + "px";
        ola.style.position = "fixed";
        if (scrollY >= 387) {
            ola.style.display = "none";
        } else {
            ola.style.display = "block";
        }
    }
    if (scrollY >= 127) {
        document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)"
    } else {
        document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)";
    }

}
