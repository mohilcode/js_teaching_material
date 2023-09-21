document.write("Hello")

const sum = (a, b) => {
    console.log("|Yes I am running " + (a+b))
    a+b
}


setTimeout(sum, 3000, 5, 6);

setInterval(sum, 5000, 2, 6);//Like a while loop

// let a = setTimeout(function() {
//     alert("I am an alert box!")
// }, 3000);
// let b = prompt("Do you want to run this settimeout?")
// if(b=="n"){
//     clearTimeout(a);
// }
// // clearTimeout(a);
// console.log(a);
