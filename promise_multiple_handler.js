let p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        // alert("Hey I have resolved");
        resolve(1);
    },2000)
})

p1.then(()=>{
    console.log("Promise has been resolved")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4);
        }, 3000)
    })
}).then((value)=>{console.log(value)})

p1.then(()=>{
    console.log("Hurray")
})
