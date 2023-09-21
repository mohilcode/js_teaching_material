//Event Listener: It is a function that waits for a specific event to happen.
//addEventListener() is used to assign multiple handlers to the same event.

let btn = document.getElementById('btn');

let x = function(){
    alert("clicked")
}

let y =  function(e){// e can be any name
    console.log(e.target)//element which was targeted
    console.log(e.clientX)//x coordinate
    console.log(e.clientY)//y coordinate
    alert("clicked again")
}

btn.addEventListener('click', x)

btn.addEventListener('click', y)

let a = prompt("What is your favorite number?");
if(a=="2"){
    btn.removeEventListener('click', x)
}
