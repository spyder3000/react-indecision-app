var nameVar = 'Spyder'
var nameVar = 'badSpyder'
console.log('nameVar', nameVar)

let nameLet = 'Lebron';
//let nameLet = 'newLebron'   // causes error;  cannot redefine let var;   
nameLet = 'badlebron'; 
console.log('nameLet', nameLet); 

const nameConst = 'Ichabod'; 
// const nameConst = 'Ichabod22';   // causes error;  cannot redefine const var;  
// nameConst = 'newIchabod'    // also causes error;  cannot re-assign const var;
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Oreo'; 
    return petName; 
}

getPetName(); 
//console.log(petName);   // error -- petName not defined;  would also give error if using let or const in function

// Block scoping -- true for let & const, but not for var

var fullName = 'Jack Vardy'; 
let firstName;   // allows for use of 'let' var outside of if-block
if (fullName) {
//    const firstName = fullName.split(' ')[0];   // 'const' or 'let' here restricts use to just the if-block
    firstName = fullName.split(' ')[0]; 
    console.log(firstName); 
}

console.log(firstName);   // works w/ var in if-stmt;  does not work for 'let' or 'const';  'let' or 'const' would need to be created prior to if-stmt
