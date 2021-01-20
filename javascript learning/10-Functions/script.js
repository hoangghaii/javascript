"use strict";

// Default Parameters
// const bookings = [];

// const createBooking = function (
// 	flightNum,
// 	numPassengers = 1,
// 	price = 199 * numPassengers
// ) {
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000);

// How Passing Arguments Works: Values vs. Reference
// const flight = "LH234";
// const jonas = {
// 	name: "Jonas Schmedtmann",
// 	passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
// 	flightNum = "LH999";
// 	passenger.name = "Mr." + passenger.name;

// 	passenger.passport === 24739479284
// 		? console.log("Checked in")
// 		: console.log("Wrong passport!");
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
// 	person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);

// Functions Accepting Callback Functions
// const oneWord = function (str) {
// 	return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
// 	const [first, ...others] = str.split(" ");
// 	return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// const transformer = function (str, fn) {
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);

// 	console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const hight5 = function () {
// 	console.log("👋");
// };

// document.body.addEventListener("click", hight5);
// ["Jonas", "Martha", "Adam"].forEach(hight5);

// Functions Returning Functions
// const greet = function (greeting) {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	};
// };

// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// // Challenge
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr("Hi")("Jonassss");

// The call and apply Methods
const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],

	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		// this.bookings.push({
		// 	flight: `${this.iataCode}${flightNum}`,
		// 	name: name,
		// });
	},
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	booking: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah Williams");

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
