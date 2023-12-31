//https://www.youtube.com/watch?v=y1j2FL9d31w&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=63


// const loadScript = async (src) =>{
//     return new Promise((resolve, reject) =>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () =>{
//             resolve(src)
//         }
//         document.head.append(script)
//     })
// }
//Problem 1
// let a = loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js`)
// a.then((value)=>{
//     console.log(value);
// })

//Problem 2
// const main2 = async () =>{
//     let a = await loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js`)
//     console.log(a)
// }
// main2()

//Problem 3
// let p = () =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             reject(new Error("Not acceptable"))
//         },3000)
//     })
// }

// let a = async() =>{
//     try{
//         let c = await p()
//         console.log(c)
//     }catch(err){
//         console.log("Handled")
//     }
// }

// a();

//Problem 4

let p1 = async() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 1000)
    })
}

let p2 = async() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(20)
        }, 2000)
    })
}
let p3 = async() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(30)
        }, 3000)
    })
}

const run = async ()=>{
    console.time("run")
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    // console.log(a1,a2,a3)
    console.timeEnd("run")
}

run();
