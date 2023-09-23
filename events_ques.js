//https://www.youtube.com/watch?v=-6rvoQi2YtI&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=49


//q1: Bookmark button
// document.getElementById("btn1").addEventListener("click", function(){
//   window.location = "https://www.google.com/";
//   win.focus();
// });

//q2: fetch content after some time again and again

// const fetchContent = async (url) => {
//     con = await fetch(url);
//     let a = await con.json();
//     return a;
// }

// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url));
// }, 3000);

//q3: turn bulb on and off

setInterval(async function(){
    document.getElementById("bulb").classList.toggle("bulb");
}, 300)
