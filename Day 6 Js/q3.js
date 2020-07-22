//Welcome the user
const name = prompt("Enter your name","Anonymous");

title.innerText = `Welcome ${name}`;
if(name==null){
    title.innerText=`Welcome`;
}


//clock
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);




//  toggle

var b = document.querySelector("button");
b.addEventListener("click",function(){
    document.body.classList.toggle("bg");
});
    



