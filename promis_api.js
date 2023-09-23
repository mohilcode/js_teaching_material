let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    }, 11000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(2);
        reject(new Error("Damnnn"))
    }, 2000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(3);
    }, 3000)
})

// p1.then((value)=>{
//     console.log(value);
// })

// p2.then((value)=>{
//     console.log(value);
// })

// p3.then((value)=>{
//     console.log(value);
// })


// let promise_all = Promise.all([p1,p2,p3]) // Only works when all resolves
// promise_all.then((value)=>{
//     console.log(value);
// })

let promise_all_settled = Promise.allSettled([p1,p2,p3])
promise_all_settled.then((value)=>{
    console.log(value);
})

let promise_race = Promise.race([p1,p2,p3]) // Shows whichover is rejecetd or resolved
promise_race.then((value)=>{
    console.log(value);
})

let promise_any = Promise.any([p1,p2,p3]) // Shows whichover is rejecetd or resolved
promise_any.then((value)=>{
    console.log(value);
})

