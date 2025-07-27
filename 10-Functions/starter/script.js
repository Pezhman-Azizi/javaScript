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
/*
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

// -------------------------------------------------------------------------------------137. First-Class and Higher-Order Functions

// -------------------------------------------------------------------------------------138. Functions Accepting Callback Functions
/*
const oneWord = function (str){
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// higher-order function
const transformer = function(str, fn){

  console.log('the original string:',`${str}`);
  console.log('the output is:',`${fn(str)}`);
  console.log('the function that did it was:', `${fn.name}`);

}

transformer('JavaScript is the best', upperFirstWord)
transformer('JavaScript is the best', oneWord)

// Js uses callbacks all the time:
const high5 = function (){
  console.log('👋');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

*/
// -------------------------------------------------------------------------------------139. Functions Returning Functions
/*

// const greet = function(greeting){
//   return function (name){
//     console.log(`${greeting} ${name}`);
//   }
// }
// const greeterHey =  greet('hey');
// greet('Hey')('Mike');

// Challenge
// my approach
const greeterHey = () => (name) => console.log(`hey ${name}`);
greeterHey()('Mike')

// jonas approach
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas')

*/
// --------------------------------------------------------------------------------------140. The call and apply Methods
/*
const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){

    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`, name: `${name}`
    })
  },
}
Lufthansa.book(1234, 'Pezhman')
Lufthansa.book(5678, 'John')
console.log(Lufthansa);


const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
}
const book = Lufthansa.book
// Doesn't work
// book(23, 'Sara Williams')

// -----------------------------------------------------------Call method

book.call(euroWings, 23, 'Sara Williams')
console.log(euroWings);

book.call(Lufthansa, 789, 'Andy Johns')
console.log(Lufthansa);

const swiss={
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
}
book.call(swiss, 90, 'Conor Adams')
console.log(swiss);

// -----------------------------------------------------------Apply Method

const flightData = [90, 'Conor Adams'];
book.apply(swiss, flightData)
console.log(swiss);

// as you see, apply only receives a list of items (like: 90, 'Conor Adams'),
// but in modern JS we can actually use spread operators instead and use call method
book.call(swiss, ...flightData)
console.log(swiss);


// ------------------------------------------------------------------------------------------------------141. Bind method
// book.call(euroWings, 23, 'Sara Williams')

const bookEW = book.bind(euroWings);
const bookLH = book.bind(Lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Steven Williams')

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Jonas')
bookEW23('Martha Cooper')


// With EventListener:

Lufthansa.planes = 300;
Lufthansa.buyPlane = function(){
  console.log(this);

  this.planes++;
  console.log(this.planes);
}


document.querySelector('.buy').addEventListener('click', Lufthansa.buyPlane.bind(Lufthansa))

// partial application

const addTax = (rate, value) => value + value*rate
console.log(addTax(.1, 200));

const addVAT = addTax.bind(null, 0.23)
// above is equal to : addVAT = (value) => value + value * 0.23

console.log(addVAT(400));
console.log(addVAT(100));

const addTax = function(rate){
  return function(value){
      console.log('result1:', `${value + value*rate}`);
      return ('result:', `${value + value*rate}`)
  }
}
addTax(0.23)(100)



const addVATArr = (rate) => (value) => console.log('result Arrow:', `${value + value*rate}`);
addVATArr(0.23)(100)

// -----------------------------------------------------------------------this key word recap on:
/*

// 1. arrow functions:

console.log(this);

const jonas = {

  firstName : 'Jonas',
  year: 1991,

  calcAge: function(){
    // console.log(this);
    console.log(2037-this.year);

    // Solution1:
      // const self = this
      // const isMillenial = function(){
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      //   // console.log(this.year >= 1981 && this.year <= 1996);
      // }


      // Solution2:
      const isMillenial = ()=>{
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);

      }
      isMillenial();
  },

  greet(){console.log(`Hey ${this.firstName}`)},

}

// jonas.calcAge()
jonas.greet()

// 2. when we have a function inside a method:

jonas.calcAge()
// returns undefined cuz although `isMellenial` is inside a method, it is still a regular function. And as a rule we know that for a regular function call, this key word for a regular function call just has the this keyword set to undefined.

//  there are solution that fixes the issue:

// 1. use self (see line 311)
// 2. using an arrow function cuz it uses its parent

*/
////////////////////////////////////////////////////////////////////////////////Coding-Challenge
/*
const poll = {

  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer(){
    const input = Number(prompt(`What is your favorite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++`));

    for (const [i] of this.answers.entries()){
      if(input === i && input <=3 && input>=0){
        console.log(this.answers[i]+=1);
        console.log('answers arr:', this.answers);
      }
    };
    // return this.answers;

    const displayResults = (type = 'array') => {
      if(type === 'array'){
          console.log(this.answers);
      }else if(type === 'string'){
          console.log(...this.answers);
      }
    }
    displayResults('string')
  },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))


const poll = {

  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer(){
    const answer = Number(prompt(`${this.question} \n ${this.options.join('\n ')} \n (Write option number)`));
    console.log(answer);
    typeof answer === 'number' && answer <= this.options.length && this.answers[answer]++;
    console.log(this.answers);

    this.displayResults('string') //? why should we use this keyword here?
  },

  displayResults(type = 'array'){
    if(type === 'array'){
      console.log(this.answers);
    }else{
      console.log(`poll results are:`, this.answers.join(' '));
    }
  }
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answers: [5, 2, 3]})
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]})
*/
// -------------------------------------------------------------------------------143. Immediately Invoked Function Expressions (IIFE)
/*
(function(){
  console.log('This will never run again');
})();

(() => console.log('this will ALSO never run again'))();

// -------------------------------------------------------------------------------144. Closures

const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking()

booker();
booker();
booker();
*/
// -------------------------------------------------------------------------------145. More Closure Examples
/*
// example 1:
let f;

const g = function(){
  const a = 23;
  f = function(){
    console.log(a * 2);
  }
}

const h = function(){
  const b = 777;
  f = function(){
    console.log(b*2);
  }
}


g();
f();
console.dir(f);

// Re-Assigning f function

h();
f();

console.dir(f);

// example 2:

const boarderPassengers = function(n, wait){
  const perGroup = n / 3;

  setTimeout(function(){

    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);

  }, wait*1000)

  console.log(`Will start boarding in ${wait} seconds`);

}

boarderPassengers(180, 3)
*/
// ------------------------------------------------------------------------------ challenge 2:

(function () {
  const header = document.querySelector('h1');
    header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue';
})
})();
