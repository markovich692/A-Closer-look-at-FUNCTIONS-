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

// const addTax = function (rate) {
//   return function addVAT(value) {
//     console.log(value + value * rate);
//   };
// };
// addTax(0.23)(23);

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose,
// and an array with the number of replies for each option. This data is
// stored in the starter 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the selected option. The
// prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For example, if the option
// is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a
// number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
// 3. Createamethod'displayResults'whichdisplaysthepollresults.The method takes a string as an input
// (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the
// results array as it is, using console.log(). This should be the default option. If type is 'string',
// display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// 5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the 'array' and
// the 'string' option. Do not put the arrays in the poll object! So what should the this keyword
// look like in this situation?

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}
//  ${this.options[0]}
//  ${this.options[1]}
//  ${this.options[2]}
//  ${this.options[3]}
//   `)
//     );

//     // console.log(this.answers);

//     if (answer >= 0 && answer <= this.answers.length) {
//       this.answers[answer]++;
//       console.log(this.answers);
//     } else {
//       alert('Wrong input');
//     }

//     this.displayResults.call(poll, this.answers);
//   },

//   displayResults(type) {
//     const [position0, position1, position2, position3] = this.answers;

//     if (typeof type === 'array') {
//       console.log(`${type}`);
//     } else {
//       console.log(
//         `Poll results are ${position0}, ${position1}, ${position2}, ${position3}`
//       );
//     }
//   },
// };

// //Calls the registerNewAnswer method
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}
//  ${this.options[0]}
//  ${this.options[1]}
//  ${this.options[2]}
//  ${this.options[3]}
//   `)
//     );

//     if (answer >= 0 && answer <= this.answers.length) {
//       this.answers[answer]++;
//       // console.log(this.answers);
//     } else {
//       alert('Wrong input');
//     }

//     // this.displayResults.call(poll,this.answers);
//     this.displayResults.call(poll);
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// //Calls the registerNewAnswer method
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// Data1:[5,2,3]
// Data2:[1,5,3,9,6,1]

// (function () {
//   console.log('This will not be called again');
// })();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     console.log(`${passengerCount++} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

//Example 1
// let f;

// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// h();
// f();

//Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers.bind(null, 333, 1)();

//Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener
// that changes the color of the selected h1 element ('header') to blue,
// each time the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked!Take
// all the time you need. Think about when exactly the callback function is executed,
//  and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
