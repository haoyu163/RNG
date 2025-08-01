const min = 0
const max = 10
const RNG = document.getElementById("Gambling");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
RNG.onclick = function(){
    Label1.textContent = Math.floor(Math.random() * max) + min;
    Label2.textContent = Math.floor(Math.random() * max) + min;
    Label3.textContent = Math.floor(Math.random() * max) + min;
}
