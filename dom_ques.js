// change the bg of the page to yellow red or any other color based on user input through prompt

let a = prompt("Enter a number between 1 and 100:");
a = Number.parseInt(a);
if(a<=25){
    document.body.style.background = "yellow"
}
else if (a>25 && a<=75){
    document.body.style.background = "green"
}
else{
    document.body.style.background = "purple"
}
