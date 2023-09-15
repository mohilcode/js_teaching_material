const changeBgYellow = () =>{
    document.body.firstElementChild.style.background = "yellow"
}

changeBgYellow();

let b = document.body
console.log(b.firstChild)// Will give text nodes and comments
console.log(b.firstElementChild)// will only give element
