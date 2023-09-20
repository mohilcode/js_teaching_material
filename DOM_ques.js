// https://www.youtube.com/watch?v=i5bX5qNOSoo&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=38

//1
document.body.firstElementChild.firstElementChild.style.color = "red";
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

//3
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

//4
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan";
});
