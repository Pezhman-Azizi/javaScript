'use strict';
/*
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
    )
  {

    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
      flightNum,
      numPassengers,
      price
  }
    console.log(booking);
    bookings.push(booking)
  }

createBooking('LH123')
// line 15 returns {'LH123', undefined, undefined}. we can set default values by using short circuits.
// Using ES5:  But if we uncomment out lines 6 and 7 then we have default values of 1 and 199.
// see the rules of short circuit and when we have falsy (undefined in this example here) values.

// we can also do equal signs in line 5 to set default values.
createBooking('LH123')

// params can take expressions as well:
createBooking('LH123', 2)
createBooking('LH123', 2, 800)
createBooking('LH123', 5)

// skipping the arguments is not allowed like the following:
// imagine we leave the numPassengers to default value and just mention the price
createBooking('LH123', 800) //=> {flightNum: 'LH123', numPassengers: 800, price: 159200}
// js thinks that 800 is numPassengers :)

//  Alternatively we can use undefined on the argument we wanna skip:
createBooking('LH123', undefined , 800) //=> flightNum: 'LH123', numPassengers: 1, price: 800}

*/

// ---------------------------------------------------------------------------136. How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2345679,
}

const checkIn = function(flightNum, passenger){

  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 2345679){
    alert('Check  in')
  }else{
    alert (' Wrong passport');
  }

}

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// is the same is doing ...

// const flightNum = flight;
// const passenger = jonas;

// summary:
// passing a primitive data type to a function = copying the value outta the function (like line 76). so the value is simply copied.
// passing an object to a function = copying an object (like line 77). so whatever we change in the copy will also happen in the original.

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(jonas);
checkIn(flight, jonas)



/*
const jessica = {
  firstName : 'Jessica',
  lastName : 'Williams',
  age: 27
}
// lets copy this jessica object into another object called marriedJessica:
// const marriedJessica = jessica;
// when we we do like line 81, we basically both variables in the Call Stack point to the same object in the HEAP instead this marriedJessica is exactly the same reference as jessica. So this marriedJessica nad jessica are two variables that point to the same object in the HEAP. So of course changing the object properties would change the original object' property's name, named jessica. Basically they aer two different names for the same thing

marriedJessica.lastName = 'Davis';
console.log('before:',  jessica);// before: {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('after:',  marriedJessica); // after: {firstName: 'Jessica', lastName: 'Davis', age: 27}
//  by the way this is the reason why we could change the properties on the object marriedJessica which was defined with const: Also on the jessica object itself.

jessica.age = 28;
jessica.firstName = 'Sam';
jessica.lastName = 'Jackson';
console.log(jessica); // {firstName: 'Sam', lastName: 'Jackson', age: 28}

// Here is the question: although we have defined jessica with const why changing properties didn't give us the const error. Cuz normally mutating the value of a const defined variable throws an error. why didn't we have it here?

// we have it when we change the whole object like the following. we can NOT assign to it a whole brand new object:
// we don't change the whole reference we just simply changing property/properties of the reference that is stored in jessica
// --------jessica = {x:45} // script.js:96 Uncaught TypeError: Assignment to constant variable. at script.js:96:9
//  we can do it with let tho!


// the same thing would happen when we pass an object as an argument to a function:
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
const marriedJessica = marryPerson(jessica, 'Davis')

console.log('before', jessica); // before {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('after', marriedJessica); // after {firstName: 'Jessica', lastName: 'Davis', age: 27}



//////----------------------but what if we want to have an object but with a different reference. meaning changing one without changing the original one. in a word a brand new object with the same exact properties:


const jessica2 ={
  firstName: 'Jessica',
  lastName: 'Williams',
  age:27,
  family: ['Alice', 'Bob']
}
// Shallow copy

      const jessicaCopy = {...jessica2}
      jessicaCopy.lastName = 'Davis'
      console.log(jessica2, jessicaCopy);


      jessicaCopy.family.push('Mary');
      jessicaCopy.family.push('John');

      console.log('Before',jessica2);
      console.log('After',jessicaCopy);


// Deep copy/clone

const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('original',jessica2);
console.log('clone',jessicaClone);
// that is it for now
*/
