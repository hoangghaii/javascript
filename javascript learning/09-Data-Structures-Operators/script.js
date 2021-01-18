"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// console.log(weekdays[3]);

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery({
		time = "20:00",
		address,
		mainIndex = 0,
		starterIndex = 1,
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// // Sets
// const orderSet = new Set([
// 	"Pasta",
// 	"Pizza",
// 	"Pizza",
// 	"Risotto",
// 	"Pasta",
// 	"Pizza",
// ]);
// console.log(orderSet);
// console.log(typeof orderSet);

// console.log(new Set("Jonas"));

// console.log(orderSet.size);
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// orderSet.delete("Risotto");
// console.log(orderSet);
// // orderSet.clear();

// for (const order of orderSet) {
// 	console.log(order);
// }

// //Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
// 	new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );
// console.log(new Set("jonasschmedtmann").size);

// Maps: Fundamentals
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
// 	.set("open", 11)
// 	.set("close", 23)
// 	.set(true, "We are open :D")
// 	.set(false, "We are close :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);
// rest.set(document.querySelector("h1"), "Heading");

// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));

// // Looping Objects: Object Keys, Values, and Entries

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
// 	openStr += `${day} `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entrie object
// const entries = Object.entries(openingHours);
// console.log(entries);

// // [key, value]
// for (const [key, value] of entries) {
// 	console.log(
// 		`On ${key}, we open at ${value.open} and close at ${value.close}`
// 	);
// }

// for (const [key, { open, close }] of entries) {
// 	console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

// // Optional Chaining
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// // Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
// 	// console.log(day);
// 	const open = restaurant.openingHours[day]?.open ?? "closed";
// 	console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Methods does not exits");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Methods does not exits");

// // Arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// console.log(users[0]?.name ?? "User array empty!");

// // <==> (tuong duong)
// // users.length > 0
// // 	? console.log(users[0].name)
// // 	: console.log("User array empty!");

// // The for-of Loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
// 	console.log(`${i + 1}: ${el}`);
// }

// console.log(menu.entries());

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

// Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players 
who scored as properties, and the number of goals as the value. 
In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// for (const player of game.scored) {
// 	console.log(player);
// }

// console.log("==============================");

// const odds = Object.entries(game.odds);
// let x = 0;
// for (const [key, value] of odds) {
// 	x += value;
// }
// console.log(x / odds.length);

// console.log("==============================");

// for (const [key, value] of odds) {
// 	const str = key == "x" ? "draw" : `victory ${game[key]}`;
// 	console.log(`Odd of ${str}: ${value}`);
// }

// console.log("==============================");

// const scorers = {};
// let tmp = 1;

// for (const player of game.scored) {
// 	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// Coding Challenge #3

/* 
Let's continue with our football betting app! 
This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
	So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
	(keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
	marking whether it's in the first half or second half (after 45 min) of the game, 
	like this: [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
	[17, "⚽️ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽️ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🔶 Yellow card"],
	[69, "🔴 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽️ GOAL"],
	[80, "⚽️ GOAL"],
	[92, "🔶 Yellow card"],
]);

console.log(typeof gameEvents);

// 1.
const events = [...new Set(gameEvents)];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
	`An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4.
for (const [key, value] of gameEvents) {
	const half = key <= 45 ? "FIRST" : "SECOND";
	console.log(`[${half} HALF] ${key}: ${value}`);
}
