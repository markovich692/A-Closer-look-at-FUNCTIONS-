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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best programming language!', oneWord);
// transformer('JavaScript is the best programming language!', upperFirstWord);

const high5 = function () {
  console.log('🖐️');
};

document.body.addEventListener('click', high5);
