'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(booking);
};

createBooking(23, 45, 300);
createBooking(23, 34, 300);
createBooking(26, 34, 300);
createBooking(26);
console.log(bookings);
