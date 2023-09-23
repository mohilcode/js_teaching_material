// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds")
//         resolve(56)
//     }, 2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2")
//         }, 2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log(value);
//     console.log("We are done");
//     return 2 // returns as a value
// }).then((value)=>{
//     console.log("FINAL DONE")
//     console.log(value);
// })


const loadscript = (src) =>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () =>{
            resolve(1);
        }
        script.onerror=()=>{
            reject(0);
        }
    })
}

let p3 = loadscript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js`)
p3.then((value)=>{
    console.log(value);
    return loadscript(`httpaas://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js`)
}).catch(()=>{
    console.log("you crazy man")
})
