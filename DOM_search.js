//Change the card title to red
let ctitle = document.getElementsByClassName('card-title')[0]
ctitle.style.color = "red";
let a = document.getElementById("secondcardtitle")
a.style.color = "blue";
let b = document.querySelectorAll(".card-title")
b[2].style.color = "green";

document.querySelector(".this").style.color = "black";
document.querySelector(".this").style.background = "white";

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))
