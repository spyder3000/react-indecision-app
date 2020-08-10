import isSeniorCitizen, {isAdult, canDrink} from './zzperson.js';  // isSenior is default, so can be renamed
console.log(isAdult(18)); 
console.log(canDrink(18)); 
console.log(isSeniorCitizen(63)); 

//import {square, add} from './utils.js';   // {} is not an object, but contain named exports
// import minusThis, {square, add} from './utils.js';  // subtract is default so NOT in curly braces;  can also rename default (e.g. subtract to minusThis)
// console.log('app.js is running!');  
// console.log(square(4)); 
// console.log(add(3,8)); 
// console.log(minusThis(3,8)); 
