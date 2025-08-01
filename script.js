const min = 0
const max = 9
const RNG = document.getElementById("Gambling");
const countLabel = document.getElementById("countLabel");
let randomNum;
RNG.onclick = function(){
    randomNum = Math.floor(Math.random() * (max - min)) + min;
    countLabel.textContent = randomNum
}



























