
function makeDice(dice)
{
  dice = Math.random();
  dice *= 6;
  dice = Math.floor(dice) + 1;
  return dice;
}

var dice1 = makeDice(dice1);
var dice2 = makeDice(dice2);

var string1 = "images/dice" + dice1.toString() + ".png";
var string2 = "images/dice" + dice2.toString() + ".png";

if (dice1 > dice2)
{
  document.querySelector(".trophy2").style.visibility = "hidden";
  var win = "Player 1";
} else if (dice2 > dice1)
{
  document.querySelector(".trophy1").style.visibility = "hidden";
  var win = "Player 2";
} else
{
  document.querySelector(".trophy2").style.visibility = "hidden";
  document.querySelector(".trophy1").style.visibility = "hidden";
  document.querySelector("#winner").textContent = "DRAW!";
}

if (dice1 !== dice2) document.querySelector("#winner").textContent = win + " wins!";

document.querySelector("#img1").setAttribute("src", string1);
document.querySelector("#img2").setAttribute("src", string2);
