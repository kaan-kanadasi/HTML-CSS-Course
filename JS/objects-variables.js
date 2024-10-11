/* 
console.log("info")
- logs the string "info" to the console, print function of JS

alert()
- triggers a pop-up alert box in the browser\

document.body.innerHTML = "hello"
- document: is a global object in JavaScript that representermits the entire HTML document loaded in the browser.
- body:  refers to the <body> element of the HTML document. The body contains the content of the webpage that is visible to users.
- innerHTML: allows you to get or set the HTML content of an element. When you set innerHTML, you can replace the current content of that element with new HTML.
*/

const object1 = {
    message: 'hello',
    price: 799
};
object1.newProperty = true;
const object2 = object1;
console.log(object1 === object2); /* returns true */

/*
=== (Strict Equality):
Compares both value and type
No type coercion occurs
Generally recommended for most comparisons

== (Loose Equality):
Compares value after performing type coercion if needed
Can lead to unexpected results due to type coercion
*/

// Comparing number and string
5 === "5"    // false
5 == "5"     // true (string "5" is coerced to number 5)

// Comparing number and boolean
1 === true   // false
1 == true    // true (boolean true is coerced to number 1)

// Comparing null and undefined
null === undefined  // false
null == undefined   // true

// Comparing objects
object1 === object2   // false (different object references)
object1 == object2    // false (different object references)

// Comparing with NaN
NaN === NaN  // false (NaN is never equal to itself)
NaN == NaN   // false

// Comparing with 0 and false
0 === false  // false
0 == false   // true (boolean false is coerced to number 0)


const object3 = {
    name: 'shirt', 
    'delivery time': '1 day',

    // nested object
    // JavaScript uses prototypal inheritance, not class-based inheritance (though class syntax exists as syntactic sugar).
    rating: { 
        stars: 4.5,
        count: 5
    },
    
    method: function function1() {
        console.log('function inside an object')
    }
}
console.log(object3.rating.count);
object3.fun();
console.log(typeof console); // returns object


/* JSON - JavaScript Object Notation
- when we send data between computers - since it is a more universal language than js [less synthax]
- when we store data
*/
console.log(JSON.stringify(object3));
const jsonString = JSON.stringify(object3);
JSON.parse(jsonString) // heps us to convert js object to json object

// local storage enusres that the date that you want to store does not get lost when the user reloads the page 
localStorage.setItem('message', 'hello')
console.log(localStorage.getItem('message')) // return hello
localStorage.removeItem('message') // message is removed from localStorage object
console.log(localStorage.getItem('message') === null) // returns true 
console.log(!localStorage.getItem('message'))// returns true
// || is 'or' and can be also used as 'default operator'
let score = JSON.parse(localStorage.getItem('message')) || {
    wins: 0,
    losses: 0,
    draws:0
};


// Nan - Not a Number
console.log(isNaN(NaN));  // true
console.log(isNaN(0/0));  // ture

let x;
console.log(x);  // undefined

let obj = { name: 'John' };
console.log(obj.age);  // undefined (because 'age' does not exist)

let arr = [1, 2, 3];
console.log(arr[5]);  // undefined (index out of bounds)


let age = -1;
if (age < 0) {
  throw new Error('Age cannot be negative');
}

try {
    let result = riskyOperation();
  } catch (error) {
    console.log('An error occurred:', error.message);
}

/*
func() -> 'default'
func(undefined) -> 'default'

func(null) -> null
*/
function func(parameter='default') {
    console.log(parameter);
}
  

// JS has a feautre called auto-boxing - JS boxes the string (primitive values) in an object to use the String object methods
// After JS uses the temporary String object to get the length of the string, it discards the object and continues treating 'hello' as a primitive
console.log('hello'.length);
console.log('hello'.toUpperCase);

// the actual value of the object is a refernce that points to the computers memory
const referance1 = {
    message: 'hello'
};
// this doesn't make a copy of the object it makes a copy of the referance that points to the object
const referance2 = referance1
// even though the object is a constant we can still change the element inside 
// const prevents us from changing the referance to the object
referance1.message = 'changed'
console.log(referance2.message) // returns changed since reference2 chared the same referance in computer memory

const referance3 = {
    message: 'changed',
    price: 799
};
console.log(referance1 === referance3) // returns false
const { message, price } = object4; 
/*  shortcut for 
const message = object4.message;
const price = object4.message;
*/
console.log(message)
console.log(price)

const referanc4 = {
    // message: message
    message,

    /* method: function function() {
        console.log('method');
    } */
    method() {
        console.log('method');
    }
}