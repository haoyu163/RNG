const min = 0;
const max = 10;
const RNG = document.getElementById("Gambling");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

RNG.onclick = function() {
    const num1 = Math.floor(Math.random() * max) + min;
    const num2 = Math.floor(Math.random() * max) + min;
    const num3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = num1;
    Label2.textContent = num2;
    Label3.textContent = num3;

    let message = "";
    if (num1 === 7 && num2 === 7 && num3 === 7) {
        message = "Jackpot!";
    } else if (num1 === num2 && num2 === num3) {
        message = "Big win!";
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
        message = "You win!";
    } else {
        message = "You lose! Try again!";
    }
    setTimeout(() => {
        alert(message);
    }, 500);
}
