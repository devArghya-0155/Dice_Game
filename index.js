var number1 = Math.floor(1 + (Math.random()*6));
var number2 = Math.floor(1 + (Math.random()*6));
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + number1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + number2 + ".png");

if (number1 > number2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (number1 < number2)
{
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "🚩Draw!";
}

let d = new Date();
document.getElementById("Year").innerHTML = d.getFullYear();

