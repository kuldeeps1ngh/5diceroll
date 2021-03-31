// Import stylesheets
import './style.css';

class Dice {
  getDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

document.getElementById("diceButton").addEventListener("click", rollDiceFn);

function rollDiceFn() {
  let dice1 = new Dice().getDiceNumber();
  let dice2 = new Dice().getDiceNumber();
  let dice3 = new Dice().getDiceNumber();
  let dice4 = new Dice().getDiceNumber();
  let dice5 = new Dice().getDiceNumber();
  document.getElementById("dice1").innerHTML= dice1;
  document.getElementById("dice2").innerHTML= dice2;
  document.getElementById("dice3").innerHTML= dice3;
  document.getElementById("dice4").innerHTML= dice4;
  document.getElementById("dice5").innerHTML= dice5;
  let totalSum = dice1 + dice2 + dice3 + dice4 + dice5;
  document.getElementById("total").innerHTML= totalSum;
}