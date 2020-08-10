const isAdult = (age) => age >= 18; 
const canDrink = (age) => (age >= 21) ? true : false;  // longer version of logic in line above
const isSenior = (age) => age >= 65; 

// for export, {} are needed but are NOT an object;  instead this contains references on what to include 
export { isAdult, canDrink, isSenior as default };   // these are named exports