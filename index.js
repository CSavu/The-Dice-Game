
function makeDice(dice)
{
  dice = Math.random();
  dice *= 6;
  dice = Math.floor(dice) + 1;
  return dice;
}

var dice1 = makeDice(dice1);
var dice2 = makeDice(dice2);

while (dice1 === dice2) dice2 = makeDice(dice2);

var string1 = "images/dice" + dice1.toString() + ".png";
var string2 = "images/dice" + dice2.toString() + ".png";

if (dice1 > dice2) var win = "Player 1";
else var win = "Player 2";

document.querySelector("#winner").textContent = win + " wins!";

document.querySelector("#img1").setAttribute("src", string1);
document.querySelector("#img2").setAttribute("src", string2);
