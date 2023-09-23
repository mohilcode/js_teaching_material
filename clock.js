const currentDate = () => {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes(); 
    let s = a.getSeconds();
    let d = a.getDate();
    let mo = a.getMonth();
    let y = a.getFullYear();
    let day = a.getDay();
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementsByTagName("p")[0].innerHTML = h + ":" + m + ":" + s + " " + d + "/" + mo + "/" + y + " " + dayArray[day];
}

setInterval(currentDate, 1000);   
