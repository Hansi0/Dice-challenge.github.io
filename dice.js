var number = Math.random();
number = number * 6;
number = Math.round(Math.floor(number)) + 1;

var diceimg1 = "dice" + number + ".png";
var img1 = document.querySelectorAll("img")[0].setAttribute("src", diceimg1);

var number2 = Math.random();
number2 = number2 * 6;
number2 = Math.round(Math.floor(number2)) + 1;

var diceimg2 = "dice" + number2 + ".png";
var img1 = document.querySelectorAll("img")[1].setAttribute("src", diceimg2);

if (number > number2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!!"



}
else if (number2 > number) {
    document.querySelector("h1").innerHTML = "Player 2 wins!!"
}
else {
    document.querySelector("h1").innerHTML = "DRAW!!!!!"

}