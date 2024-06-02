/* 1. Find the unique values.
 */
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

/*
2. Write a function aclean(arr) that returns an array cleaned from anagrams.
*/
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,cteachers, ear" or "PAN, cheaters, era"

/*
3. Solve the error!
*/
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more"); // Error: keys.push is not a function
console.log(keys)