//function declaration --> when a function is declared
// function singHappy(){
//     console.log("happy birthday");
// }
// singHappy();

//function expression  --> when a function is expressed means its value is stored in a variable
// const sumTwoNum = function(num1 , num2){
//     return num1 + num2;
// }
// const returnVal = sumTwoNum(5,7);
// console.log(returnVal);

//arrow function --> when a function uses arrow
// const sumTwoNum = (num1 , num2) => {
//     return num1 + num2;
// }
// const returnVal = sumTwoNum(5,7);
// console.log(returnVal);

//arrow function (shorten)
// const sumTwoNum = (num1 , num2) => num1 + num2;
// const returnVal = sumTwoNum(5,7);
// console.log(returnVal);

//isEven
//input : 1 number
//output : true or false
// function isEven(num){
//     return num % 2 === 0;
// }
// console.log(isEven(8));

//first character of a string
// function firstChar(str){
//     return str[0];
// }
// console.log(firstChar("hello"));

//in array target value present or not. return the index
// function target(arr, tar){
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] === tar){
//             return i;
//         }
//     }
//     return -1;
// }
// const arr = [3,54,6,4,7,8,9]
// console.log(target(arr, 5));


//hoisting (only in js) (will be discussed later in detail)
//before declaration we can call a function 
// but it does not work for function expression and arrow function
// singHappy();
// function singHappy(){
//     console.log("happy birthday");
// }


//functions inside function
// function app(){
//     const myFunc = () => {
//         console.log("hello from myFunc");
//     }

//     const add = (num1, num2) => {
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => {
//         return num1 * num2;
//     }

//     console.log("inside app");

//     console.log(add(4,7));
//     myFunc()
//     console.log(mul(4,7));
// }
// app();


// lexical scope --> if same variable present in a function , then the function first checks its local lexical area if that variable presnt or not. If not present then it checks its parent function.
// const myVar = "value69";
// function myApp(){
//     // const myVar = "value1";
//     function myFunc(){
//         // const myVar = "value69";
//         console.log("inside muFunc", myVar);
//     }

//     console.log(myVar);
//     myFunc();
// }
// myApp();


//block scope v/s function scope
//let and const are block scope  --> can be accessable inside the block
// {
//     // let x = "hello";
//     const x = "hello";
//     console.log(x);
// }
// console.log(x);

//var is function scope  -->can be accessed from anywhere
// {
//     var x = "hello";
//     // console.log(x);
// }
// console.log(x);


//default parameters
// function sumTwoNum(num1 , num2=7){
//     return num1 + num2;
// }
// const returnVal = sumTwoNum(5);
// console.log(returnVal);


//rest parameters
//takes rest parameters
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(a+b+c);
// }
// myFunc(2,5,7,4,1,9,3);

// function myFunc(...nums){
//     let sum = 0;
//     for(let i=0; i<nums.length; i++){
//         sum+=nums[i];
//     }
//     return sum;
// }
// const ans = myFunc(2,5,7,4,1,9,3);
// console.log(ans);


//parameter destructuring
//used in objects ...and popular in react.
// const person = {
//     fname : "prasenjit",
//     gender : "male",
//     age : 24,
// }

//normal way
// function printDetails(obj){
//     console.log(obj.fname);
//     console.log(obj.gender);
// }
// printDetails(person);

//destructuring
// function printDetails({fname,gender,age}){
//     console.log(fname);
//     console.log(gender);
//     console.log(age);
// }
// printDetails(person);


// callback function
// function func2(){
//     console.log("inside func2");
// }
// function func1(callback){
//     console.log("inside func1");
//     callback();
// }
// func1(func2);


// function returning another function
// function myFunc(){
//     function hello(){
//         return"hello world";
//     }
//     return hello;
// }
// const ans = myFunc();
// console.log(ans());

//*** */ we are accepting function as an input or returning a function thats why callback function and myfunc function is called --> higher order function***