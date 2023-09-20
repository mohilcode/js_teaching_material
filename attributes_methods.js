let first = document.getElementById("first");//Should do (good practice)
let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttribute("style"))
console.log(first.hasAttribute("class"))
first.setAttribute("hidden", "true")
first.hidden = false;
first.setAttribute("class", "yellow blue")
first.removeAttribute("class");
console.log(first.attributes);
console.log(first.dataset)
console.log(first.dataset.game)
