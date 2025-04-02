//methods --> function inside objects
// const person = {
//     firstName: "prasen",
//     age: 37,
//     about: function(){
//         // console.log(`my name is ${person.firstName} , my age is ${person.age} and I lives in kolkata`);
//         console.log(`my name is ${this.firstName} , my age is ${this.age} and I lives in kolkata`);
//         //this is the object itself (here, person)
//     }
// }
// //call the function inside object
// person.about();


//this keyword
// function personInfo(){
//     console.log(`my name is ${this.firstName} , my age is ${this.age} and I lives in kolkata`);
// }
// const person1 = {
//     firstName: "prasen",
//     age: 23,
//     about: personInfo
// }
// const person2 = {
//     firstName: "barsha",
//     age: 22,
//     about: personInfo
// }
// const person3 = {
//     firstName: "bridhhi",
//     age: 3,
//     about: personInfo
// }
// person1.about();   //here this object refers to person1 object
// person2.about();   //here this object refers to person2 object
// person3.about();   //here this object refers to person3 object


//window object
// console.log(this);  //javascript's own object
//or
// console.log(window); 

//by default any empty function calls window object
//to avoid this developers use strict to avoid default window object
// "use strict"
// function myFunc(){
//     console.log(this);
// }
// myFunc();






//call , apply and bind method

//call method --> used to call any method by giving the name of the method inside()
// example 1
// const user1 = {
//     firstName: "prasenjit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName,this.age);
//     }
// }
// const user2 = {
//     firstName: "barsha",
//     age: 7,
//     //here about func unavilable but we can use user1's about function by call method
// }
// user1.about.call();   //output is undefined because , we havn't mensioned the method name inside ().
// user1.about.call(user1);  //here it calls the method of user1
// user1.about.call(user2);   //inspite of the about function not present in person2 , we can use person1's about method by mensioning the person2 name inside()


//we can also declare the about function outside with parameters
function about(address, phone){
    console.log(this.firstName,this.age,address,phone);
}
const user1 = {
    firstName: "prasenjit",
    age: 8,
}
const user2 = {
    firstName: "barsha",
    age: 7,
}

//using call method, passing parameters individual
// about.call(user1,"kolkata",9626473);
// about.call(user2,"kolkata",9626473);

//using apply method, passing parameters as array
// about.apply(user1,["kolkata",9626473]);
// about.apply(user2,["kolkata",9626473]);

//bind method returns value into a function and then the function is called
const func1 = about.bind(user1, "kolkata", 76234);
const func2 = about.bind(user2, "kolkata", 76234);
func1();
func2();