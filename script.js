console.log("Merhaba");

console.log(123456);

console.log(true);
console.error("An error occured");

console.warn("A warning ");


// first line commnet out

/**
 * comment lines multi lines 
 */ //#end region

var age = 21;
var namee = "Name";
console.log(age);
console.log(namee);

age = 11;
namee = "Kerem";

console.log(age);
console.log(namee);

const id = 15; // this line is final varable 
let id2 = 20;

console.log(id)
console.log(id)


// variable Types 

// Primitive 

//number
let money = 20;
//String 
let firstName = "name";
//Boolean
let isActive = true;

//null
let job = null;
console.log("type of job " + typeof job)
    //null is generally part of primitive typoes 


//undefined 
let car;
console.log("typeof car)" + typeof car)


//Reference Types 

//Array 
let names = ["Baha", "Kerem", "Asli"];
console.log(names)

//Object

let adress = {
    "city": "Lancaster",
    "country": "UK"
};



/**
 * Lesson 4
 *Converting variables
 */

//  string to number
let num1 = '5';
let num2 = '10';

console.log(num1 + num2); //510

let num3 = Number('5');
let num4 = Number('10');

console.log(num3 + num4); //15

//number to string 

//Object to date
let date = String(new Date());
console.log('date is : ' + date);

// array to String 
let StringArray = String([1, 2, 3, 4]);
console.log(typeof StringArray)
console.log(StringArray.length)

//to string 
let value = (false).toString();
console.log(value);