// arguments object -- no longer bound w/ arrow functions

/*const add = function (a, b) {
    console.log(arguments);   // would still display 3rd arg even if not specified;  arguments not avail in arrow function 
    return a + b; 
}
console.log(add(55,1, 1001)); */

const add2 = (a, b) => {
//    console.log(arguments);   // ERROR -- arguments not avail in arrow function 
    return a + b; 
}
console.log(add2(55,1, 1001)); 

// this keyword -- no longer bound  

const user = {
    name: 'Jack', 
    cities: ['Easley', 'Charlotte', 'Clemson'], 
    printPlacesLived: function () {
        console.log(this.name); 
        console.log(this.cities); 
        const that = this;  
        this.cities.forEach(function(city) {
            //console.log(this.name + ' has lived in ' + city);   // this.name does not exist within this function;  
            console.log(that.name + ' has live in ' + city);  // workaround is that=this prior to forEach; 
        }); 
    }, 
    printPlacesArrow: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' [arrow] has lived in ' + city);   // w/ arrow function, this still keeps the original scope  
        }); 
    },
    printPlacesArrowFail:  () => {
        this.cities.forEach((city) => {  // fails because this in this.cities refers to the preceding user 'this'
            console.log(this.name + ' [arrow] has lived in ' + city);   // w/ arrow function, this still keeps the original scope  
        }); 
    }, 
    printPlacesShorthand() {    // ES6 method syntax (not an arrow fn, but shorthand from printPlacesArrow above) 
        // return this.cities.map((city) => {    // .map allows you to transform array, but does not modify this.cities 
        //     return this.name + ' has lived in ' + city + '!';    
        // })
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!')   // Shorthand even further;  same as prev line 
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' [sh] has lived in ' + city);   // w/ arrow function, this still keeps the original scope  
        // }); 
    },
}
//user.printPlacesLived(); 
//user.printPlacesArrow(); 
//user.printPlacesArrowFail(); 
//user.printPlacesShorthand(); 
console.log(user.printPlacesShorthand()); 

const multiplier = {
    nums:  [2,3,4], 
    multby: 3, 
    multiply() {
        return this.nums.map((num) => num * this.multby );  // shorthand because it's a simple return  
    }
}
console.log(multiplier.multiply())


