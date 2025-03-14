// console.log can print something on console
console.log("hello world kolkata")

//introduction to variables
//variables can store some information
//we can use that information later
//we can change that information later

"use strict";
//declare a variable
var firstName = "prasenjit"
//use a variable
console.log(firstName);
//change value
firstName = "paul";
console.log(firstName)


//let keyword
// declare variable with let keyword
// with let , a variable can be declared only once
let animal = "tiger";
animal = "lion";
console.log(animal);


//declare constants
const pi = 3.14;
// pi = 3.11;
console.log(pi ** 3);


//string indexing
let name = "jnwHIIUjkms WEBJAJX";
console.log(name[5]);
console.log(name.length);
console.log(name[name.length-1])

let fname = "     prasenjit        ";
fname = fname.trim();
console.log(fname.length);
console.log(fname.toUpperCase());
let newstring = fname.slice(1,5);
console.log(newstring);


//typeof operator

//data types (primitive data types)
// string "harshit"
// number 12,3,4,2,5
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
let man = "human";
// console.log(typeof age);
// console.log(typeof man);

//convert number to string
// age = age + "";  //trick
age = String(age);
console.log(typeof age)

//convert string to number
// man = +man;    //trick
man = Number(man);
console.log(typeof man);


//string concatination
let s1 = "prasenjit";
let s2 = "paul";
let fullname = s1 +" "+ s2;
console.log(fullname);

// let s1 = "11";
// let s2 = "4";
// let fullname = s1 + s2;
// console.log(fullname);
// fullname = +s1 + +s2;   //converting string into number
// console.log(fullname);


//template string
let myname = "prasenjit"
let myage = "23+";
let aboutMe = `my name is ${myname} and my age is ${myage}`;
console.log(aboutMe);

//undefined
let firstname;
console.log(typeof firstname);

//null
let nullvar = null;
console.log(typeof nullvar);  //bug, error as it should be null data type
nullvar = "proo";
console.log(typeof nullvar, nullvar);

//BigInt --> new primitive data type(2020) in js
//2 ways to declare BigInt
let num = BigInt(763773782920083774923818917);
let nume = 832n;
console.log(typeof nume);
console.log(num + nume);

//boolean & comparision operator
let num1 = 6;
// let num1 = "8";
let num2 = 8;
console.log(num1 < num2);

// == vs ===
// console.log(num1 == num2);    //checks only value not data type. It does not happen to any other progranming laguage
// console.log(num1 === num2);  //checks value as well as data type

// != vs !==
// console.log(num1 != num2);   //like ==
// console.log(num1 !== num2);   //like ===

//ternary operator
let age1 = 8;
let drink = age1 >= 5 ? "coffee" : "milk";
console.log(drink);

//nested if else
// let winningNumber = 11;
// let userGuess = +prompt("Guess the number");
// if(userGuess === winningNumber){
//     console.log("your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low");
//     }else{
//         console.log("too high")
//     }
// }

//switch
let day = 4;

switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}