"use strict";

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery: function ({
		time = "20:00",
		address,
		mainIndex = 0,
		starterIndex = 1,
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// The for-of Loop
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries());

// // The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // Short Circuiting (&& and ||)
// console.log("---- OR ----");
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---- AND ----");
// console.log(0 && "Jonas");
// console.log(7 && "Jonas");

// console.log("Hello" && 23 && null && "jonas");

// // Practical example
// if (restaurant.orderPizza) {
// 	restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...ortherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, ortherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // The Spread Operator (...)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = "Jonas";
// const letter = [...str, " ", "S."];
// console.log(letter);
// console.log(...str);

// // Real-world example
// const ingredients = [
// 	prompt("Let's make pasta, Ingerdient 1?"),
// 	prompt(" Ingerdient 2?"),
// 	prompt(" Ingerdient 3?"),
// ];
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // Destructuring Objects
// restaurant.orderDelivery({
// 	time: "22:30",
// 	address: "Via del Sole, 21",
// 	mainIndex: 2,
// 	starterIndex: 2,
// });

// restaurant.orderDelivery({
// 	address: "Via del Sole, 21",
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
// 	fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , second] = restaurant.categories;
// console.log(main, second);

// //Switch variable
// // let temp = main;
// // main = second;
// // second = temp;
// // console.log(main, second);

// [main, second] = [second, main];
// console.log(main, second);

// //Recive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 1);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original 
team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable 
for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number 
of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dormund",
	player: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// const [player1, player2] = game.player;
// console.log(player1, player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, ...fieldPlayers);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const {
// 	odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
// 	console.log(players);
// 	console.log(`${players.length} goals were scored`);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
// printGoals(...game.scored);

// team1 < team2 && console.log("Team 1 is more likely to win");
// team2 < team1 && console.log("Team 2 is more likely to win");
