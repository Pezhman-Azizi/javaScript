'use strict';
// Add custom method to Set prototype
// Set.prototype.intersection = function (otherSet) {
//   return new Set([...this].filter(el => otherSet.has(el)));
// };



const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
console.log(new Map (Object.entries(openingHours)));

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhances object literals

  openingHours,

  order(starterIndex,mainIndex){
    console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Down below I have passed a single object from line 70 to 73. Which means passing an object as an argument to a function which does the destructuring.
  // order of the parameters doesn't matter
  orderDelivery({ address, mainIndex = 0, starterIndex = 1, time = '20:00'}){
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  showFriSchedule({time, driver, paymentMethod}){
    console.log(`here is the friday delivery schedule:
    ${driver} will be within your location by ${time}.
    Please bring your ${paymentMethod} with you to make it smooth`)
  },

  // for spread operator
  orderPasta(ing1, ing2, ing3){
    console.log(`here is your pasta made with ${ing1}, ${ing2}, ${ing3}`);
  },
  // for rest operator
  orderPizza(mainIngredient, ...otherIngredients){
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


/*

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
*/

// --------------------------------------------------------------------------------------------------------------------------------------------114. The Nullish Coalescing Operator (??)
/*
// Nullish: null and undefined (NOT 0 or ' '):
// nullish operator : ??

restaurant.numberGuest = 0;
// const numberGuest= restaurant.numberGuest ? restaurant.numberGuest : 10;
const guest = restaurant.numberGuest || 12;
console.log(guest);


const guestCorrect = restaurant.numberGuest ?? 1;
console.log(guestCorrect);

*/

// --------------------------------------------------------------------------------------------------------------------------------------------115. Logical Assignment Operators
/*
// OR assignment operator:

const rest1 = {
  name: 'Capri',
  numGuest: 20
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

rest1.numGuest = rest1.numGuest || 10;
console.log(rest1.numGuest);

// now we wanna set a default property for an object that doesn't have that particular property!

rest2.numGuest = rest2.numGuest || 10;
console.log(rest2.numGuest);
console.log(rest2);


// --------------------------------------------------------------- OR assignment operator
// For OR assignment: we often here if we wanna assign a value to a variable if the variable is falsy
// shorter and cleaner way is as follows:
rest2.numGuest ||= 10;
console.log(rest2.numGuest);

// Now if the number od guests is zero, then since zero is a falsy value then with or operator it gets short circuited.
// But with ?? (nullish operator) we can solve it.

// so lets see

const rest3 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
  numGuest: 0
}

// rest3.numGuest ||= 10;
// console.log(rest3.numGuest);

//  as you see the numGuest in rest3 in 0 but when we log the property it is 10!!!

// so here is how to fix it using nullish operator(??):

// --------------------------------------------------------------- Nullish (null or undefined) assignment operator

rest3.numGuest = rest3.numGuest ?? 20;
console.log(rest3.numGuest);
//  cleaner way:
rest3.numGuest ??= 2;
console.log(rest3.numGuest);

//  Now the log shows the actual number which zero guest.

// --------------------------------------------------------------- AND assignment operator

// For AND assignment: we often here if we wanna assign a value to a variable if the variable is truthy.

// rest2.owner = rest2.owner && 'Anonymus';
// console.log(rest2);
// shorter way:
rest2.owner &&= 'Anonymus';
console.log(rest2);

// And if a property doesn't exist then we can use && operator:
rest1.owner &&= 'Anonymus'
console.log(rest1.owner);

*/
// --------------------------------------------------------------------------------------------------------------------------------------------116. Challenge 1:
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players){

    for(let i = 0; i < players.length; i++){
        console.log(`${players[i]}`);
      }
      console.log(`with the total score of ${players.length}`);
  }
};

// 1. Create one player array for each team (variables 'players1' and 'players2')

// const players1 = game.players[0];
// console.log(players1);

// const players2 = game.players[1];
// console.log(players2);

let [players1, players2] = game.players
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const substitutePlayers = ['Thiago', 'Coutinho', 'Perisic'];

const players1Final = [...players1, ...substitutePlayers]
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const {team1, x: draw, team2} = game.odds;
console.log(team1, draw ,team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

console.log('here is th esolution to number 6:');

game.printGoals('Lewandowski', 'Gnarby', 'Lewandowski','Hummels', "Tony");
game.printGoals(game.scored);


// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

team2>team1 && console.log('team 1 is more likely to win');
team1>team2 && console.log('team 2 is more likely to win');

*/
// --------------------------------------------------------------------------------------------------------------------------------------------117. Looping Arrays: The for-of Loop:

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// for (const [i, element] of menu.entries()) console.log(`${i+1}: ${element}`);

for (const item of menu.entries()) console.log(item);

*/

// --------------------------------------------------------------------------------------------------------------------------------------------118. Enhanced Object literals:

// see the changes in restaurant object ;)

// --------------------------------------------------------------------------------------------------------------------------------------------119. Optional Chaining(?.):
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon);

// console.log(restaurant.openingHours.mon.open);

// With optional chaining:
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days){
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`the restaurant opens on ${day} at ${open}`);
}

// Methods:
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// Arrays:
const users = [{name: 'Jonas', email:'hello@jonas.io'}]
console.log(users[0]?.name ?? 'There is no name');
*/

// --------------------------------------------------------------------------------------------------------------------------------------------120.  Looping Objects: Object Keys, Values, and Entries
/*
// Property Names:
const properties = Object.keys(openingHours)
console.log(properties);

let openStr = `we are open on ${properties.length} days:`;

for (const day of properties){
  console.log(day);
  openStr += `${day} ,`;
}
console.log(openStr);

// Property values:
const values = Object.values(openingHours)
console.log(values);

//  Entries object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries){
  // console.log(day);
  console.log(`on ${day} we open at ${open} and we close at ${close}`);
}
*/

// --------------------------------------------------------------------------------------------------------------------------------------------121.  Challenge-2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski"):
// use other array methods
/*
for (const [index, player] of game.scored){
  console.log(`Goal ${index+1} : ${player}`);
}

game.scored.forEach((item, index, array) =>
// const arr = [];
game.scored.forEach((item, index) => {
  console.log(`Goal ${index+1} : ${item}`);
  arr.push(`Goal ${index+1} : ${item}`);
}))
console.log(arr);


// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
const odds = Object.values(game.odds)
for (const odd of odds){
 console.log(odd);
 sum += odd;
 }
console.log(sum/odds.length);

// way ti know the data type is actually array
console.log(Array.isArray(Object.values(game.odds)));

*/
/*
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉

const gamesOdds = Object.entries(game.odds);
console.log(gamesOdds);

for (const [team, odd] of gamesOdds){
  if(team  === 'x'){
    console.log(`Odd of draw: ${odd}`);}
  else{
    console.log(`Odd of victory ${game[team]}: ${odd}`);
  }
}
*/
// Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
/*

{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

for (let i = 0; i < game.scored.length; i++){
  console.log(countOccurrences(game.scored, game.scored[i]));
}

*/

// --------------------------------------------------------------------------------------------------------------------------------------------122. Sets
// set is a unique collection of values. lets create one.
// way to create it is to write `new Set()` and pass in an iterable like array or string (a bit further down;))
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
/*
console.log(ordersSet);
console.log(typeof ordersSet);
// sets look like arrays but they don't have the order of elements and elements are unique.

// we can pass string(cuz they are iterables).
console.log(new Set('jonas'));
console.log(new Set('jonassss'));

//  you can pass empty value to sets as well
console.log(new Set());

//////////////////////How to work with sets:

// 1. size: number of unique different values:
console.log(ordersSet.size);

// 2. check if a certain value is in the set:(Case sensitive)
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));

// 3. add new elements
console.log(ordersSet.add('Garlic Bread'));

// 4. deleting elements:
console.log(ordersSet.delete('Risotto'));

ordersSet.delete('Risotto')
console.log(ordersSet);
  // Note: .add() returns the updated Set itself (so we can chain),
  // but .delete() returns a boolean (true if deleted, false if not found).
  // So to see the updated Set after deletion, use console.log(ordersSet) separately.

// 5. Since sets don't have indexes we can't get the data retrieved from the set

console.log(ordersSet[0]); //undefined

// 6. deleting all the elements from the set:
ordersSet.clear()
console.log(ordersSet); //empty set

// . since sets are iterable we can loop over them:
for (const order of ordersSet) console.log(order);


//////////// Example use case:
// we want to have an array without any duplicate values.
const staff = ['waiter', 'chef', 'waiter', 'manger', 'chef', 'waiter'];
// we need to create a set.
const staffUnique = new Set(staff)
console.log(staffUnique);
// convert the set to an array. cuz remember set are NOT arrays:
// Previously we learned that we can use spread operators over iterables and sets are iterables so we can use spread operators
const staffUniqueArray = [...new Set(staff)]
console.log(staffUniqueArray);
*/

// -------------------------------------------------------------------------------------------------------------------------------------------- 123. New Operations to Make Sets Useful!
/*
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

// 1. intersection:
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('intersection:',[...commonFoods]);

// 2. union: mixes two sets and return only unique values:
const italianMexicanFusion = italianFoods.union(mexicanFoods)
console.log('union:', italianMexicanFusion);

// 3. difference: finds the unique ones on the first set that we call the method upon
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);


// 4. returns the unique elements on each and combins them two together
const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

// 5. checks wether if they are totally different sets:
console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/
// -------------------------------------------------------------------------------------------------------------------------------------------- 124. Map fundamentals
/*
const mapped = new Map();
// 1.Set (modifying and returning the out put is the nature of set):

mapped.set('name', 'Portofino');
mapped.set(1, 'Hanley City Center');
mapped.set(2, 'Soho,London');
// calling the set method returns the updated map instead of just updating it.
// we can also chain the keys to the map:
mapped
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'we are open')
.set(false, 'we are closed')

console.log(mapped);

// 2. Get method: to read the data from the map:

console.log(mapped.get('name'));
console.log(mapped.get(true)); //data type we pass to get really matters.

const time = 21;
console.log(mapped.get(time > mapped.get('open') && time > mapped.get('close')));

// 3. has method
console.log(mapped.has('categories'));

// 4. delete: slow and not encouraged :)
mapped.delete(2)
console.log(mapped);

// 5. size
console.log(mapped.size);

// 6. remove all the elements
mapped.clear();
console.log(mapped.clear());

// note: lets create a object key (data type of the key is object) and set it to Map:

mapped.set([1,2], 'test')
console.log(mapped.get([1,2])); // undefined: why?

// Reason being that is those arrays point to a different place in memory heap although they identically look the same.
// What we need to do is to set the array value in a variable and use it in get method as follows:


const arr = [1,2];
//  We added it and we logged it to the console:
console.log(mapped.set(arr, 'test'));

console.log(mapped.get(arr));

// cool feature: based on the previous note, we could set object keys, right? Now we can use DOM.
// DOM objects are also a special type of objects so we can set DOM objects as keys:


      mapped
        .set(document.querySelector('h1'), 'heading')
        .set(document.querySelector('h1').innerHTML, 'hey ya')

        console.log(mapped);




// this ain't change any text in the page, cuz set just store the key/value pairs:
// what we can do instead is to get access to that key/value pair and then change em.

const h1 = document.querySelector('h1');
mapped.set(h1, 'hey ya')
h1.innerHTML = mapped.get(h1)

console.log(mapped);
// now the text has changed.
*/

// -------------------------------------------------------------------------------------------------------------------------------------------- 125. Map: Iterations
/*
// previously we used set to create key/value pairs. Now we can use array of arrays, the first element of inner array is key and second one is the value

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1,'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try Aain']
])
console.log(question);
// example
const correct = 'JavaScript';
question.get(3) === correct? console.log(question.get(true)) : console.log(question.get((false)));

// convert object to Map:

// As we saw before while calling Object.entries, it used to return a nested array which look as just the same as the new map array that we have passed in line 977.
// so we can pass in an object to Object.entries and since it returns an array of arrays
console.log(Object.entries(openingHours)); // check the output

// Now we can use new Map(), to turn the object to array of arrays so that it will be as same as a Map structure.

const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);

//  ITERATION ON MAP: since they are iterable we can iterate through them by for loop:
//  remember we used the Object.entries to make the oject iterable? now that we know the structure of Maps (array of arrays, which within there are key value pairs, then we can without using Object.entries use them). Now in maps we have array of arrays so we can use destructuring and loop through the outer array. in a word each item of the `question` Map contains an array of a key and a value

// Quiz App:
console.log(question.get('question'));

for (const [key, value] of question){
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 2
console.log(answer);

// check the answer 1st approach:

answer === question.get('correct')? console.log(question.get(true))
  : console.log(question.get(false));

// check the answer 2nd approach:
console.log(question.get(question.get('correct') === answer));

// Convert Map to Array

console.log([...question]);
// ways to extract values, keys and entries from the array:
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// ya can spread'em:
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

// -------------------------------------------------------------------------------------------------------------------------------------------- 126. Which data structure to use:

//  check the instructions in the local file


// -------------------------------------------------------------------------------------------------------------------------------------------- 127. Challenge-3:
const gameEvents = new Map([
  [17,'⚽ GOAL'],
  [36,'🔁 Substitution'],
  [47,'⚽ GOAL'],
  [61,'🔁 Substitution'],
  [64,'🔶 Yellow card'],
  [69,'🔴 Red card'],
  [70,'🔁 Substitution'],
  [72,'🔁 Substitution'],
  [76,'⚽ GOAL'],
  [80,'⚽ GOAL'],
  [92,'🔶 Yellow card'],
]);

// const uniqueEvents = new Set([...gameEvents.values()]);
// console.log(uniqueEvents);

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:

// 1. Create an array 'events' of the different game events that happened (no duplicates)
/*


//////////////////////////////////////////////// First approach
const events = []
for(const [key , value] of gameEvents){
   events.push(value)
}
console.log(events);

const eventsUnique = new Set (events);
console.log(eventsUnique);

/////////////////////////////////////////////// SECOND approach

const events = new Set([...gameEvents.values()])
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(gameEvents.size);
console.log(gameEvents);

let eventsArray = [];
for (const [key, value] of gameEvents){
  eventsArray.push(key)
}
console.log('eventsArray:',eventsArray);

let sum2 = 17-2
for(let i = 0; i < eventsArray.length-1; i++){
  console.log(eventsArray[i+1] - eventsArray[i]);
  sum2 += (eventsArray[i+1] - eventsArray[i]);
}
console.log(`An event happened, on average, every ${sum2/10} minutes`);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF] 17: ⚽ GOAL

for (const [key, value] of gameEvents){
  (key <= 45)? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`)
}
*/
// -------------------------------------------------------------------------------------------------------------------------------------------- 128. Working With Strings - Part 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));//gives the first occurance
console.log(airline.lastIndexOf('r'));

// occurence of a whole word at its first occurance and it is case sensitive:
console.log(airline.indexOf('portugal'));

// slice:
console.log(airline.slice(4));//here 4 is the index where the slicing starts. => Air Portugal it is called su string and it doesn't change the original string. due to strings being primitive (immutable).
// In order to use substring in other places we need to save it in a variable at first.
// All of this means that it returns a new string.

console.log(airline.slice(4, 7));
//  end value is exclusive. means it stops extracting before reaching to that end index
// NOTE: the length of the final and start slice is b-a => air length = 7-4

// Extracting the first word without hard coding:
console.log(airline.slice(0, airline.indexOf(' ')));

// Extracting the last word without hard coding:
console.log(airline.slice(airline.lastIndexOf(' ')+1));

// we can start from the end by passing negative values to the slice method
console.log(airline.slice(-2));
console.log(airline.slice(1, -1)); //first and last letter are removed.

// Example: write a function that receives an airplane seat and returns wether it is the middle seat or not.

// hint: B and E are middle seats

const isMiddleSeat  = function(seat){
 const s = seat.slice(-1);
 (s === 'B' || s === 'E') ? console.log('is middle seat') : console.log('in not middle seat');
 return s;
}

isMiddleSeat('737B');
isMiddleSeat('737A');
isMiddleSeat('737E');

/////////////////////QUESTION
// string is a primitive but why do we have a method for it?
// what makes an string to be able to be called by a method?
// why do they have methods? should methods only be available on objects?

// whenever we call a method on a string, JS behind the sense converts that string primitive to an string object with the same content! And then on that object is where that method is called. ths process called boxing. js takes that string and puts in a box.

console.log(new String('jonas')); // see the log
console.log(typeof new String('jonas')); // see the log

// now when the operation is done the object comes around as a regular string primitive.
console.log(typeof new String('jonas').slice(1)); // see the log
*/

// -------------------------------------------------------------------------------------------------------------------------------------------- 129. Working With Strings - Part 2

/*

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

// Fix the capitalization in passenger name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing Email:

const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.Io \n';

// trim
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail);

console.log(trimmedEmail === normalizedEmail);

// replacing
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. boarding door 23';
console.log(announcement.replace('door', 'gate')); // first accurence and case sensitive

console.log(announcement.replaceAll('door', 'gate'));

// using REGEX:
console.log(announcement.replace(/door/g, 'gate'));

// Boolians

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

// StartsWith:
console.log(plane.startsWith('A'));
console.log(plane.startsWith('Ai'));
console.log(plane.startsWith('Aib'));
console.log(plane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('part of the new airbus family');
}

// practice exercise:
const checkBaggage = function(items){
 const baggage = items.toLowerCase();
 if (baggage.includes('knife') || baggage.includes('gun')){
  console.log('you are not allowed on board');
 }else{
  console.log('you are welcome onboard');

 }
}

checkBaggage('i have a laptop, some food and a pocket Knife')
checkBaggage('socks and camera');
checkBaggage('gor some snacks and a gun for protection');

*/

// -------------------------------------------------------------------------------------------------------------------------------------------- 130. Working With Strings - Part 3
/*
// split: splits the string and store the results into the elements of an array:
console.log('a+very+nice+string'.split('+'));
console.log('Pezhman Azizi'.split(' '));

const [firstName, lastName] = 'Pezhman Azizi'.split(' ')
console.log(firstName, lastName);

// join:
 const newName =['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);

const pasenger = 'jessica ann smith davies'

const capitalizeName = function(name){
  const names = name.split((' '));

  const nameUpper = [];
  for (const n of names){
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(nameUpper); //see the log
  console.log(nameUpper.join(' ')); //see the log to understand the use of join
}
capitalizeName('jessica ann smith davies');
capitalizeName('jonas schmedtmann');

// Padding: adding number of characters to the start and end of a string until it will get a certain style:

const message = 'Go to gate 23!'
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// exercise
const maskCreditCard = function (number){
  // const str = String() => One way to turn a number to a string
  const str = number + ''; // Another way to convert number to string. Reason being is that when using + operator, if one of the values are string, then the other one turns to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(12341672));
console.log(maskCreditCard(1231672354765476));
console.log(maskCreditCard('937459729409173497967545602956'));

// Repeat:
const message2 = 'Bad weather  ... All departures delayed ...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes waiting on the line. ${'🛩️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(12);
*/
// -------------------------------------------------------------------------------------------------------------------------------------------- 131. Challenge-4
/*

Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
outputs):
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀


/////////////////////////////////////////////////////////////----second-approach:

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button')

const camelCase = function(inputWords){

  const splittedWords = inputWords.trim().toLowerCase().split('_');
  const [firstWord, secondWord] = splittedWords
  // console.log(firstWord + secondWord.replace(secondWord[0], secondWord[0].toUpperCase()));
  return(firstWord + secondWord.replace(secondWord[0], secondWord[0].toUpperCase()));
}

const countEmoji = function(number){
  let count = [];
  for (let i=0; i<=number; i++){
   count.push(i);
  }
  // console.log('length:', count.length);
  return count.length
}


button.addEventListener('click', () =>{

  // const inputText = document.querySelector('textarea').value;
  // console.log(inputText);

  const inputBox = document.querySelector('textarea').value.split('\n')
  // console.log(inputBox);

  for (const word of inputBox){
    const numEmoji = countEmoji(`${inputBox.indexOf(word)}`);
    console.log(camelCase(word) + ' ' +`${'✅'.repeat(numEmoji)}`);
  }
})


/////////////////////////////////////////////////////////////----second-approach:

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

 document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const lines = text.trim().toLowerCase().split('\n');


  for (const [i, line] of lines.entries()){
    // console.log(i, line);
    const words = line.split('_');
    // console.log(words);
    const [first, second] = words
    const camelCase = first + second.replace(second[0], second[0].toUpperCase());
    // console.log(camelCase);
    console.log(camelCase.padEnd(20)+`${'✅'.repeat(i+1)}`);
  }

})

*/

//------------------------------------------------------------------------------------------------------------132. String Methods Practice

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flight = flights.split('+');
console.log(flight);

for(const flightLog of flight){
   const [status, departure, arrival, time] = flightLog.split(';');
  //  console.log(status, departure, arrival, time);

    let result = status.replaceAll('_', ' ') +  ' ' + 'FROM' +  ' '
      + departure.slice(0, 3).toUpperCase() + ' ' + 'TO' +  ' '
      + arrival.slice(0, 3).toUpperCase() + ' '
      + `(${time.replace(':', 'h')})`;

    result = result.padStart(43, '-');

    if(result.includes('Delayed')){
      console.log(`${'🔴'}${result}`);
    }else{
      console.log(result);
    }


}

// _Delayed_Departure;fao93766109;txl2133758440;11:25
// _Arrival;bru0943384722;fao93766109;11:45
// _Delayed_Arrival;hel7439299980;fao93766109;12:05
// _Departure;fao93766109;lis2323639855;12:30'
