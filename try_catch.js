setTimeout(()=>{
    console.log("Hacking Wifi ... Please wait ... ")
}, 1000)

try{
    setTimeout(() => { // If code is in scheduled setting like settimout, catch wont work
        console.log(rahul);
    }, 2000);
}    
catch(error){
    console.log("bALLER")
}

setTimeout(()=>{
    console.log("Fetching Username and Password ... Please wait ... ")
}, 2000)

setTimeout(()=>{
    console.log("Hacking Rahul's facebook Id ... Please wait ... ")
}, 3000)

setTimeout(()=>{
    console.log("Username and password of Rahul fetched")
}, 4000)
