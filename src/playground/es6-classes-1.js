class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;   // this refers to the instance of this class;  
        this.age = age; 
    }
    getGreeting() {
        return `Hi.  I am ${this.name}.`   // `` template string format
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);     // super refers to parent class;  will run constructor from Person class;  
        this.major = major; 
    }
    hasMajor() {
        return !!this.major;   // if string, !! will flip this to true;  if empty or null, !! will flip to false
    }
    getDescription() {
        let description = super.getDescription(); 
        if (this.hasMajor())  description += `  Their major is ${this.major}`
        return description;  
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);     // super refers to parent class;  will run constructor from Person class;  
        this.homeLocation = homeLocation; 
    }
    getGreeting() {
        let greeting = super.getGreeting(); 
        if (this.homeLocation)  greeting += `  I am visiting from ${this.homeLocation}`
        return greeting;  
    }
}

const me = new Student('Spyder', 20, 'Math');
//console.log(me.getGreeting(), me.getDescription());  
console.log(me, me.getDescription()); 

const other = new Student(); 
//console.log(other.getGreeting(), other.getDescription()); 
console.log(other, other.getDescription(), other.getGreeting()); 

const other2 = new Traveler('Oreo', 10, 'Charlotte, NC'); 
console.log(other2.getGreeting()); 

const other3 = new Traveler(undefined, undefined, 'Outer Space'); 
console.log(other3.getGreeting()); 

