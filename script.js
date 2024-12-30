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
