//compilation
//code execution

//why compilation

//how javascript code executes

//what is global execution context?
//what is local execution context?
//closures




// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "prasenjit";
// console.log(firstName);


//hoisting
// console.log(this);
// console.log(window);
// console.log(myFunc);
// console.log(fullName);
// myFunc();

//function declaration
// function myFunc(){
//     console.log("this is my function");
// }

//function expression
// var myFunc = function(){
//     console.log("this is my function");
// }

// var firstName = "prasenjit";
// var lastName = "paul";
// var fullName = firstName+" "+lastName;
// console.log(fullName);
// myFunc();



//function execution scope
// let foo = "fooo";
// console.log(foo);
// function getFullName(fName,lName){
//     console.log(arguments);
//     let myVar = "inside function";
//     console.log(myVar);
//     const fullName = fName + " " +lName;
//     return fullName;
// }
// const personName = getFullName("pro","paul");
// console.log(personName);



//scope chain / lexical scope
// const lName = "paul";
// const printName = function(){
//     // console.log(arguments)  //by defaut called when function is created
//     const fName = "pro";
//     console.log(fName);
//     console.log(lName);
// }
// printName();





//************************ closures ***************************

//function returns function
// function outerFunc(){
//     function innerFunc(){
//         console.log("hello from inner");
//     }
//     return innerFunc;
// }
// const ans = outerFunc();
// // console.log(ans);
// ans();


//closure example 1
//as printName does not have fName,lName , it gets it from its closure(lexical scope)
//when printName returns it returns along with its sarrounding parameters
// function printFullName(fName,lName){
//     function printName(){
//         console.log(fName,lName);
//     }
//     return printName;
// }
// const ans = printFullName("pro","paul");
// // console.log(ans);
// ans();

//closure example 2
//while returning from the function inside hello, it returns along with its sarrounding parameters a,b,x
// function hello(x){
//     const a = "vara";
//     const b = "varb";
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans = hello("pro");
// ans();

// closure example 3
// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }
// const cube = myFunction(3);
// const ans = cube(4);
// console.log(ans);


// closure example 4
function func(){
    let count = 0;
    return function(){
        if(count<1){
            console.log("hi, you called me");
            count++;
        }else{
            console.log("I have already called");
        }
    }
}
const myFunc = func();
myFunc();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();
myFunc2();