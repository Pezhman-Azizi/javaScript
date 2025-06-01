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
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }

};

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

