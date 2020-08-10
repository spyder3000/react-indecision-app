console.log('utils.js is running'); 

const square = (x) => x *x; 
const add = (a, b) => a + b; 
const subtract = (a, b) => a - b; 


// for export, {} are needed but are NOT an object;  instead this contains references on what to include 
export { square, add, subtract as default };   // square & add are named exports, subtract is default

// alternative: do export in-line  
//export const square = (x) => x * x; 
//export default subtract;   // while keeping const subtract above OR 
// export default (a, b) => a - b;    // default function in-line w/out name

