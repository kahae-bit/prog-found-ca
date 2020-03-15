// JavaScript Document

// question 1

var food = "hamburger";

// question 2

var person = {
	name: "Freddie",
	age: "45",
};

// question 3

var outOfStock = true;

if(outOfStock === true) {
	console.log("In stock");
}
else {
	console.log("Out of stock");
}

// question 4

var numbers = [10, 20, 30, 40, 50];

var firstItem = numbers[0];
console.log(firstItem);

var secondItem = numbers[1];
console.log(secondItem);

var thirdItem = numbers[2];
console.log(thirdItem);

var fourthItem = numbers[3];
console.log(fourthItem);

var fifthItem = numbers[4];
console.log(fifthItem);

// question 5

for(var count = 15; count <= 25; count++) {
	console.log(count);
}

// question 6

for(var count = 15; count <= 20; count = count + 1) {
	console.log(count);
}

// question 7

var games = ["Modern Warfare", "zelda"];

var arr = [{
	Game: "Modern Warfare", 
	review: 2, 
	worthTrying: false
}, 
{
	Game: "Zelda", 
	review: 9, 
	worthTrying: true
	}
];

for(var i = 0; i < arr.length; i++) {
	console.log(arr[i].review);
	console.log(arr[i].worthTrying);
}

// question 8

function whatIDontLike(animals) {
	console.log("I don't like " + animals)
}
whatIDontLike("sebras");

// question 9

function subract(number1,number2){
	var total = number1 - number2;
	console.log(total);
}

subract(50,40);

// question 10

var emptyArray = [game];

function whatGameILike(game) {
	console.log(game);
}
whatGameILike("skyrim");
