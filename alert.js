
/*Codes for current time*/
setInterval(mytimer,1000);

function mytimer(){
    const d =new Date();
    document.getElementById("time")
    .innerHTML=d.toLocaleTimeString();
}