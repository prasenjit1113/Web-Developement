//important array methods

//forEach (not important)
//example 1
// const numbers = [4,2,5,8];
//foreach --> automatically takes value and its corresponding index.
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// })
// numbers.forEach(function(number){
//     console.log(number*2);
// })

//example 2
// const users = [
//     {firstName: "prasenjit", age: 23},
//     {firstName: "ram", age: 24},
//     {firstName: "sham", age: 22},
//     {firstName: "jadu", age: 21},
// ]
// users.forEach(function(user){
//     console.log(user.firstName);
// })



// map  (***important ..specially in react***)
//it uses callback function and always returns an array. So it is mandatory to return from function
//example 1
// const numbers = [3,4,5,2,1,6];
// const square = function(number){
//     return number*number;
// }
// const squareNum = numbers.map(square);
// console.log(squareNum);

//or
// const squareNum = numbers.map(function(number){
//     return number*number;
// })
// console.log(squareNum);

//or using arrow func
// const squareNum = numbers.map((number, index) => `index is ${index} and square is ${number*number}`);
// console.log(squareNum);

//example 2
// const users = [
//     {firstName: "prasenjit", age: 23},
//     {firstName: "ram", age: 24},
//     {firstName: "sham", age: 22},
//     {firstName: "jadu", age: 21},
// ]
// const details = users.map(function(user){
//     return `username is ${user.firstName} and age is ${user.age}`;
// })
// console.log(details);



//filter method
// it always returns true or false. only true values are returned.
// const numbers = [3,2,5,7,4,6,1,8]
// const evens = numbers.filter(function(number){
//     return number%2 === 0;
// })
// console.log(evens);

//or using arrow function
// const odds = numbers.filter((number) => number%2!==0);
// console.log(odds);



// reduce method
// it returns only one resultant value
//example 1 using arrow function
// const numbers = [1,3,4,5,6,10]
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator+currentValue;
// },100);
// console.log(sum);

//how it works, when 100 not given
//accumulator  , currentValue  , return 
// 1               3               4
// 4               4               8
// 8               5               13
// 13              6               19
// 19              10              29 (final value)
// by default we can change the initial accumuator value by adding any number to the end of the bracket. in this case the accumulator strats from our given value and currentValue will start from 1st value

// example 2
// const userCart = [
//     {productId: 1, productName: "Mobile", price: 16000},
//     {productId: 2, productName: "laptop", price: 46000},
//     {productId: 3, productName: "headset", price: 4000},
// ]
// const total = userCart.reduce((totalPrice, currentPrice) => {
//     return totalPrice + currentPrice.price;
// },0)
// console.log(total);

//here totalPrice is initially 0
//how it works
// totalPrice        currentPrice         return 
// 0                   16000               16000
// 16000               46000               62000
// 62000               4000                66000 (final total)




//sort method
//It changes the original array and sorts according to char ascii values
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

//example 1
// const numbers = [323,11636,46,3975,67,8,53];
// //ascending sort
// numbers.sort((num1,num2) => num1-num2);
// //descending sort
// // numbers.sort((num1,num2) => num2-num1);
// console.log(numbers);

//how it works
// a-b ---> postive (greater than 0) ---> prints b, a
// a-b ---> negative (less than 0) ----> prints a, b

//example 2
// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

//example 3
// const products = [
//     {productId: 1, productName: "p1", price: 300},
//     {productId: 2, productName: "p2", price: 700},
//     {productId: 3, productName: "p3", price: 334},
//     {productId: 4, productName: "p4", price: 143},
//     {productId: 5, productName: "p5", price: 267},
// ]
// const lowToHigh = products.sort((num1,num2) => num1.price-num2.price);
// console.log(lowToHigh);




// find 
//it returns the 1st answer which matches the condition. It mainly used when we have to find details by unique id
// example 1
// const myArray = ["hello", "Dog", "cat", "tiger", "lion"];
// const ans = myArray.find((arr) => arr.length===3);
// console.log(ans);

//example 2
// const users = [
//     {userId: 1, userName: "harshit"},
//     {userId: 2, userName: "ram"},
//     {userId: 3, userName: "Shaym"},
//     {userId: 4, userName: "Jadu"},
// ]
// const ans = users.find((user) => user.userId===3);
// console.log(ans);



//every method
//returns true if all elements are applicable otherwise false
// example 1
// const numbers = [2,4,22,10,8]
// const ans = numbers.every((number) => number%2===0);
// console.log(ans);

// example 2
// const userCart = [
//     {productId: 1, productName: "Mobile", price: 16000},
//     {productId: 2, productName: "laptop", price: 26000},
//     {productId: 3, productName: "headset", price: 4000},
// ]
//check if every product is under 30000 or not
// const ans = userCart.every((user) => user.price<30000);
// console.log(ans);



// some method 
//returns true if at least one element is applicable otherwise false
// example 1
// const numbers = [2,3,23,1,8];
// const ans = numbers.some((number) => number%2===0);
// console.log(ans);

// example 2
// const userCart = [
//     {productId: 1, productName: "Mobile", price: 16000},
//     {productId: 2, productName: "laptop", price: 46000},
//     {productId: 3, productName: "headset", price: 4000},
// ]
// check if there any product whose price is > 30000
// const ans = userCart.some((user) => user.price>30000);
// console.log(ans);



// fill method 
// it fills the array with any value
// const numbers = [2,3,23,1,8,7,5];
// numbers.fill(-3,2,5);  //(value to be filled in,starting idx,ending idx-1)
// console.log(numbers);



//splice method (change original array)
//it is used to delete or insert into any index in array
//(index, delete, insert)
// const myArray = ["item1", "item2", "item3", "item4"];
//delete at index 1
// const deletedItem = myArray.splice(1,2);  //(from index, number of deletions)
// console.log(deletedItem);
// console.log(myArray);

//insert at index 2
// myArray.splice(2,0,"inserted item");  //at index 2 , insert item
// console.log(myArray);

//insert and delete together
// const deletedItem = myArray.splice(1,2,"item2 altered", "item3 altered");   //from index 1 delete 2 items and insert 2 items
// console.log(deletedItem);
// console.log(myArray);