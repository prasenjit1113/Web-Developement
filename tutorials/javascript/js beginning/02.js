//Arrays (reference type)
// it is a ordered collection of items

// let fruits = ["banana", "apple", "mango", "grapes"]
// let numbers = [2,3,5,7.6]
// console.log(fruits);
// console.log(numbers[2]);

// we can store different types in an array
// let mixed = ["hello", 3 ,5 , "go", null, undefined]
// console.log(mixed)
// console.log(typeof mixed)
// console.log(Array.isArray(fruits));


//***push and pop are faster than shift and unshift****

//push (adds items at the end)
// let fruits = ["banana", "apple", "mango", "grapes"]
// fruits.push("guava");

//pop (deletes items from the end)
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruit is: ", poppedFruit);

//unshift (adds items at the beginning)
// fruits.unshift("guava");
// console.log(fruits);

//shift (deletes items from the beginning)
// let shiftedFruit = fruits.shift();
// console.log(fruits);
// console.log("shifted fruit is: ", shiftedFruit);


//primitive vs reference data types
//primitive stores in stack memory
// let num1 = 6;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log("after incrementing");
// console.log(num1);
// console.log(num2);

//reference types stores in stack memory but points the address in heap memory
// let arr1 = ["num1", "num2"];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push("num3");
// console.log("after pushing");
// console.log(arr1);
// console.log(arr2);


//how to clone array or how to concatenate two arrays
// let arr1 = ["num1", "num2"];
// let arr3 = ["num4", "num5"];

// method 1 --> we don't perfer this
// let arr2 = ["num1", "num2"];

// method 2
// let arr2 = arr1.slice(0).concat("num4", "num5");

// method 3
// let arr2 = [].concat(arr1, "num4", "num5");

// method 4 --> new way
// let arr2 = [...arr1]; //here ... is called spread operator
// let arr2 = [...arr1, ...arr3];

// arr1.push("num3");
// console.log(arr1 === arr2);
// console.log(arr1);
// console.log(arr2);


//use const for creating array
//const variable stored in heap memory
// const fruits = ["banana", "apple", "mango", "grapes"];
// fruits.push("guava");
// console.log(fruits);


//for of loop in array
// const fruits = ["banana", "apple", "mango", "grapes"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

//for in loop
// const fruits = ["banana", "apple", "mango", "grapes"];
// const fruits2 = [];
// for(let fruit of fruits){
//     fruits2.push(fruit);
// }
// console.log(fruits2);


//array destructuring --> used to store value of array to different variables in one line
const arr = ["value1", "value2"];
// let myvar1 = arr[0];
// let myvar2 = arr[1];
// console.log("value of var1 is ", myvar1);
// console.log("value of var2 is ", myvar2);

let [myvar1, myvar2] = arr;
console.log("value of var1 is ", myvar1);
console.log("value of var2 is ", myvar2);