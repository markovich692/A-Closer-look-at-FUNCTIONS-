'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   bookings.push(booking);
//   console.log(booking);
// };

// createBooking('AH666', 45, undefined);
// createBooking('AH666', 5);
// console.log(bookings);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'AH666';
//   passenger.name = 'Mr ' + passenger.name;
//   // passenger.passport = 12345;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passsport!');
//   }
//   console.log(flightNum);
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best programming language!', oneWord);
// // transformer('JavaScript is the best programming language!', upperFirstWord);

// const high5 = function () {
//   console.log('🖐️');
// };

// document.body.addEventListener('click', high5);

//functions that return functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const salute = greet('hi');
// salute('Albert');

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum} `
//   );
//   this.bookings.push({
//     flight: `${this.iataCode}${flightNum}`,
//     name,
//   });
// };

// book.call(lufthansa, 345335, 'James');
// book.call(lufthansa, 346666, 'Bob');
// book.call(eurowings, 345345, 'Edwards');

//Using the bind method
// const bookEw = book.bind(lufthansa);
// book.bind(eurowings)(555555, 'Bob');

// const bookEW23 = book.bind(lufthansa, 23);

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// console.log(lufthansa);

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(23));

const addTax = function (rate) {
  return function addVAT(value) {
    console.log(value + value * rate);
  };
};

addTax(0.23)(23);
