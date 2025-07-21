# 🧠 JavaScript Fundamentals – Function Parameters and Argument Passing

This lesson dives into how JavaScript handles **function parameters**, focusing on default values, primitives vs. objects, and how argument passing works under the hood.

## ✈️ Section 10 Highlights – Creating Bookings

- Demonstrates default parameter values using both ES5 and ES6 syntax
- Shows how expressions can be used in parameter defaults
- Covers the pitfalls of skipping arguments and how to handle them with `undefined`

```js
createBooking('LH123', undefined, 800); // ✅ Skips numPassengers, sets custom price
erence
✅ Key Takeaways:
Primitives are passed by value → a copy is made

Objects are passed by reference → changes affect the original

Example:

js
Copy
Edit
const flight = 'LH234';
const jonas = { name: 'Jonas Schmedtmann', passport: 2345679 };
checkIn(flight, jonas);
Even though flight stays unchanged, jonas.name is mutated inside the function.

🧬 Object Copying: Reference, Shallow, and Deep
js
Copy
Edit
const marriedJessica = {...jessica}; // 🔁 Shallow copy
const jessicaClone = structuredClone(jessica); // 🧬 Deep copy
Mutating properties of a shallow copy can still affect nested objects.

Use structuredClone() to avoid shared nested structures.

