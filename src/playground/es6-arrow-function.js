function square(x) {
    return x * x; 
}
console.log(square(3))

// const squareArrow = (x) => {
//     return x * x; 
// }

const squareArrow = (x) => x * x;    // simpler syntax for simpler function (e.g. returns just a simple expression)
console.log(squareArrow(9)); 

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];    
}
const getFirstNameShort = (fullName) => fullName.split(' ')[0]; 

console.log(getFirstName('john doe')); 
console.log(getFirstNameShort('john doe')); 


