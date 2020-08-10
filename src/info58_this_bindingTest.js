import React from 'react';   // using ES6 syntax for React;  
import ReactDOM from 'react-dom'; 
import IndecisionApp from './components/IndecisionApp'; 

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))   // 1st param is JSX to render;  2nd is location -- e.g. 'app' on index.html;  

class OldSyntax {
    constructor() {
        this.name = 'John'; 
        this.getGreeting = this.getGreeting.bind(this);  // needed to bind this to class OldSyntax to prevent lost context of this.name;  
    }
    getGreeting() {
        return `hi. my name is ${this.name} `
    }
}
const oldSyntax = new OldSyntax(); 
const getGreeting = oldSyntax.getGreeting;  
console.log('jj', oldSyntax); 
console.log(oldSyntax.getGreeting()); 
console.log(getGreeting());   // error unless .bind(this) is specified in constructor 

class NewSyntax {
    name = 'Jen';   // do not need var, let, const
    getGreeting = () => {       // arrow functions do not have their own this binding, so this will be bound to NewSyntax class
        return `hi. my name is ${this.name} `
    }
}
const newSyntax = new NewSyntax() 
const newGetGreeting = newSyntax.getGreeting;  
console.log(newGetGreeting()); // no Error because this is correctly bound to class
