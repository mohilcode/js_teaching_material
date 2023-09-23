//asyn await: Any fucntion can be made async and then await promises in that


async function harry (){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Celsius")
        }, 2000)
    })
    
    let blrWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Celsius")
        }, 5000)
    })

    // delhiWeather.then(alert)
    // blrWeather.then(alert)
    console.log("Fetching Delhi Weather");
    let delhiW = await delhiWeather
    console.log(delhiW);
    console.log("Fetching Blr Weather");
    let blrW = await blrWeather
    console.log(blrW);
    return [delhiW, blrW]
}

console.log("Welcome to weather control room")

const cherry = () =>{
    console.log("This is cherry function")
}

let a = harry();
let b = cherry();//getting executed in parallel
a.then((value)=>{
    console.log(value)
})
