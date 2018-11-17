var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = [0];
var cardTwo = [2];

cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length === 2, cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay[0] != cardsInPlay[1]) {
		alert("Sorry try again.")
	}
