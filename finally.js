const f = () =>{
    try{
        let a = 0
        // console.log(harry)
        console.log("program ran succesfully")
        return; // Even if you add return in try, finally still runs
    }
    catch(err){
        console.log("this is an error")
        console.log(p)
    }
    finally{ // If i dont use this, the code will just stop before, used for closeup operations
        console.log("I am a good baby")
        //close the file
        //exit the loop
        //write to the log file
    }
}

f();
