// //synchronous programming

// const prompt=require("prompt-sync")({sigint:true});
// let a = prompt("Enter a number")
// console.log(a);

// //ASYNCHRONOUS PROGRAMMING

// console.log("Start")
// setTimeout(function(){
//     console.log("Hello World");
// }, 3000);
// console.log("End");

//Callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
function loadScript(src, Callback){
    let script=document.createElement('script');
    script.src=src;
    script.onload=()=>{
        console.log("Script Loaded");
        Callback(null, src);
    }
    script.onerror=()=>{
        console.log("Error");
        Callback(new Error("Script not loaded"));
    }
    document.body.append(script);
}

const hello=(error, src)=>{
    if(error){
        console.log(error);
        return;
    }
    alert("Hello" + src);
}

loadScript(`httpsqws://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js`, hello);
