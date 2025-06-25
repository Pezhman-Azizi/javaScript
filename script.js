'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

  },
  // Down below I have passed a single object from line 70 to 73. Which means passing an object as an argument to a function which does the destructuring.
  // order of the parameters doesn't matter
  orderDelivery: function({ address, mainIndex = 0, starterIndex = 1, time = '20:00'}){
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  showFriSchedule: function({time, driver, paymentMethod}){
    console.log(`here is the friday delivery schedule:
    ${driver} will be within your location by ${time}.
    Please bring your ${paymentMethod} with you to make it smooth`)
  },

  // for spread operator
  orderPasta: function(ing1, ing2, ing3){
    console.log(`here is your pasta made with ${ing1}, ${ing2}, ${ing3}`);
  },
  // for rest operator
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/*

// first object to be passed
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});
// second object to be passed
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

restaurant.showFriSchedule({
  time: '12:00',
  driver: 'Jacob',
  paymentMethod: 'debit card',
  address: "to be confirmed"
})

*/

// ------------------------------------------------------------- destructuring Arrays ------------------------

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// ----------------------------------------------------------------------
/*
let [main, secondary] = restaurant.categories;
console.log(main, secondary); // Italian Pizzeria

[main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian
*/

// ----------------------------------------------- Switching variables
/*
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian
*/
// ----------------------------------------------- returning two values from a function
/*
console.log(restaurant.order(0, 1));
//since an array is returned then we can destruct it. see the following:
let [starter, mainCourse] = restaurant.order(0, 1);
console.log(starter, mainCourse);

console.log(restaurant.order(0,0));

console.log(`interpolation result: ${restaurant.order(0, 2)}`);
console.log(typeof `${restaurant.order(0,2)}`);

// Receive 2 return values from a function

const [starter, main] = restaurant.order(2,0);
console.log(starter, main);

*/

// ----------------------------------------------- nested destructuring

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [l, , [m, n]] = nested;
// console.log(l, m, n);

// Destructuring Arrays:

//----------------- 1.1:
// Destructure the books array into two variables called firstBook and secondBook.

// const [firstBook, secondBook] = books

//----------------- 1.2
// Destructure the books array into a variable called thirdBook. You must skip the first two books.

// const [, , thirdBook] = books;


//----------------- 1.3
// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [[,rating], [,ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// ------------------------------------------------------------- destructuring Objects ------------------------
/*
1. how is it done?
destruct the restaurant.
*/

// const {name, categories, openingHours} = restaurant;
// console.log(name, categories, openingHours);

/*
2. how to change the attribute names with the original ones?
*/
// const {name: restaurantName, categories: tag, openingHours: hours} = restaurant;
// console.log(restaurantName, tag, hours);


/*
3. setting default values.
in case of working with APIs when we wanna fetch data that are nor clear how the structure of the content is then we might need to set default values.
so lets say the restaurant doesn't have any attribute called `menu` if i wanna deconstruct it then we need to set a default value while deconstructing! otherwise we get undefined!
*/
// const {menu = [], categories: tag, openingHours: hours} = restaurant;
// console.log(menu,  tag, hours);
// const {menu = [], categories: tag, openingHours: hours, startersMenu : starters = []} =restaurant
// console.log(menu, tag, hours, starters);

// ------------------------------------------------------------- Mutating Objects' variables ------------------------
/*
let a = 111;
let b = 999;
const obj = {a:23, b: 7, c: 14};
({a, b} = obj)
console.log(a, b);
*/
// ------------------------------------------------------------- Nested Objects--------------------------------------
/*
const {fri} = restaurant.openingHours
console.log(fri);

const {fri: {open, close}} = restaurant.openingHours
console.log(open, close);

// // we can even take it further and rename the open and close

const {fri: {open: o, close: c}} = restaurant.openingHours
console.log(o, c);
*/

/*

// Extract some data using regular destructuring ✅
const booking = {
  destination: 'Rome',
  guestName: 'Pezhman',
  date: '2025-08-10',
  paid: true
}
const {destination,  guestName} = booking;
console.log(destination, guestName);

// Pass that data into a method using parameter destructuring ✅
const travelAgency = {
  confirmBooking: function({guestName, destination, date}){
    console.log(`Booking confirmed for ${guestName} to ${destination} on ${date}.`);
  }
}

travelAgency.confirmBooking(booking);

*/

// ----------------------------------------------------- 111. The Spread Operator (...) ----------------------------------------------------


/*

//---------------------------------------------- 1st use case: extracting elements from an array:

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(...arr);
console.log(...newArr);

// we are making a new array down below:
const newMenu = [...restaurant.mainMenu, 'Khuresht'];
console.log(newMenu);
// if we want just want the elements individually:
console.log(...newMenu);

//---------------------------------------------- 2nd use case: passing elements to a function:
// real-world example:

const ingredients = [
  // prompt('ingredient1:'),
  // prompt('ingredient2:'),
  // prompt('ingredient3:'),
]
console.log(...ingredients);
restaurant.orderPasta(...ingredients)

//---------------------------------------------- 3rd. Shallow Copy of an array:

const copyArr = [...arr];
console.log(copyArr);

//---------------------------------------------- 4th: join 2 arrays together:
const joinedArr = [...newArr, ...newMenu];
console.log(joinedArr);

// iterables: Spread operator works on strings, arrays, maps, sets BUT NOT objects

const str = 'Jonas';
console.log(...str);
// doesn't work on template literals as template literals doesn't accept elements seperated with comma because it is NOT a function!
// it is only doable when we pass the elements to a function. remember the use case 2 of template literals? tnx
// --------------------console.log(`${...str}`);

const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...letters);

// ------------------------------------ spread operators for objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Guiseppe"}
console.log(newRestaurant);

// shallow copy of object:
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


// ---------------------------------------------------------------------- Rest Pattern and Parameters


/*

// 1) ------------------------------------------------------- Destructuring
// ------------------------------------------- Rest for arrays:


// SPREAD: cuz it is on the RIHGT side of =
const arr = [1, 2, ...[3,4]];

// REST: cuz it is on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);


// ------------------------------------------ Rest for objects:

const {sat, ...weekdays} = restaurant.openingHours
console.log(sat, weekdays);


// 2) ------------------------------------------------------- Functions


// rest => variable names seperated by commas.
// spread => values seperated by comma!


// -------------------------------------------------------

const add = function(...numbers){
  let sum = 0;
  for (const number of numbers){
    sum+=number;
  }
  console.log(sum);
}
add(1,2,3);
add(4,5,6,7)

const x = [23, 5, 7];
add(...x);

// -------------------------------------------------------restaurant object and rest method:

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')

*/


// --------------------------------------------------------------------------------------------------------------------------------------------113. Short Circuiting (&& and ||)

// logical operators can 1. Use Any data Type 2.Return any data types 3. Short-Circuiting (short-circuit evaluation)

// --------------------------------------------- OR operator
// Short circuit for OR operator: it returns the first operand if the first (left) one is truthy without evaluating the rest of operands. Otherwise it returns th second one!
console.log("Short circuit for OR operator");

console.log( 3 || 'Jonas');
console.log( '' || 'Jonas');
console.log( true || 0);
console.log( undefined || null);
console.log(undefined || null || 0 || '' || null || 'hello' || 23 || null);

// using turnery operator:
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 16;
console.log(guest1);

// using short circuiting:
const guest2 = restaurant.numGuests || 10
console.log(guest2);

// --------------------------------------------- AND operator
console.log("Short circuit for AND operator");
// Short circuit for AND operator: it returns the first operand if the first (left) one is falsy without evaluating the rest of operands.
console.log( 0 && 'jonas');
console.log( 7 && 'jonas');
console.log( null && undefined);

console.log('Hello' && '23' && null && 'jonas');

// real-life example:

if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
