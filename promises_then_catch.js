// Promises in JavaScript are a way to handle asynchronous operations

// let promise = new Promise(function(resolve, reject){
//     alert("Hello")
//     resolve(56);
// })


// console.log("hello")
// setTimeout(function() {
//     console.log("hello in 2 seconds")
// }, 2000)
// console.log("my name is" + "John")
// console.log(promise)

// Promises are used for parallel running of operations
// fetch google.com homepage ==> console.log("google.com homepage done")
// fetch data from the data api
//fetch pictures from the server
//print downloading
//rest of the script

let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("I am a promise and I am rejected");
        // resolve(true);
        reject(new Error("I am an Error"))
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled");
        resolve(true);
    }, 5000)
})

p2.then((value) => {
    console.log(value);
})


//Error will no longer be visible in console but instead will be caught and then some message will be displayed instead
// p1.catch((error) => {
//     console.log("some error occured in p1")
// })

p1.then((value) => {
    console.log(value)
}, (error) => {
    console.log("YOOOOOO, you fucked up");
})
