"use strict";

// Scoping in Practice
// const calcAge = (birthYear) => {
// 	const age = 2037 - birthYear;

// 	function printAge() {
// 		let output = `${firstName}, You are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (1981 <= birthYear <= 1996) {
// 			const firstAge = "Steven";
// 			const str = `Oh, and you are a millenial, ${firstName}`;
// 			console.log(str);

// 			function add(a, b) {
// 				return a + b;
// 			}

// 			output = "NEW OUTPUT";
// 		}

// 		console.log(output);
// 	}
// 	printAge();

// 	return age;
// };

// const firstName = "Jonas";
// calcAge(1991);

// Hoisting and TDZ in Practice

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
// 	console.log("All products deleted!");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
// 	console.log(2037 - birthYear);
// console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
// 	console.log(2037 - birthYear);
// console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
// 	year: 1991,
// 	calcAge: function () {
// console.log(this);
// 		console.log(2037 - this.year);
// 	},
// };
// jonas.calcAge();

// const matila = {
// 	year: 2017,
// };

// matila.calcAge = jonas.calcAge;
// matila.calcAge();

// const f = jonas.calcAge;
// f();

// Regular Functions vs. Arrow Functions
// var firstName = "Matilda";

// const jonas = {
// 	firstName: "jonas",
// 	year: 1991,
// 	calcAge: function () {
// 		console.log(this);
// 		console.log(2037 - this.year);

// 		// Solution 1
// 		const self = this; // self or that
// 		const isMillenial1 = function () {
// 			console.log(self);
// 			console.log(self.year >= 1981 && self.year <= 1996);
// 		};

// 		// Solution 2
// 		const isMillenial2 = () => {
// 			console.log(this);
// 			console.log(this.year >= 1981 && this.year <= 1996);
// 		};

// 		isMillenial1();
// 	},

// 	// greet: function () {
// 	// 	console.log(this);
// 	// 	console.log(`Hey ${this.firstName}`);
// 	// },
// 	greet: () => {
// 		console.log(this);
// 		console.log(`Hey ${this.firstName}`);
// 	},
// };

// jonas.calcAge();
// jonas.greet();

// // arguments keyword
// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 7, 12);

// var addArrow = (a, b) => {
// 	return a + b;
// };
// console.log(addArrow(2, 5, 8));

// Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
// 	name: "Jonas",
// 	age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log("Friend:", friend);
// console.log("Me", me);

// Primitives vs. Objects in Practice

// // Primitive types
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
// 	firstName: "Jessica",
// 	lastName: "Williams",
// 	age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage:", jessica);
// console.log("After marriage: ", marriedJessica);

// Copying objects
const jessica2 = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
	family: ["Alice", "Bob"],
};

/** sao chép các giá trị của tất cả thuộc tính
 * có thể liệt kê từ một hoặc nhiều đối tượng nguồn
 *  đến một đối tượng đích */
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.unshift("John");
console.log("jessicaCopy: ", jessicaCopy.family);
