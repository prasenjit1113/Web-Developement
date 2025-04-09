// Object Oriented JavaScript / Prototypal Inheritance

//methods --> function inside objects
// const person = {
//     firstName: "prasen",
//     age: 37,
//     about: function(){
//         // console.log(`my name is ${person.firstName} , my age is ${person.age} and I live in kolkata`);
//         console.log(`my name is ${this.firstName} , my age is ${this.age} and I lives in kolkata`);
//         //this refers to the object itself (here, person)
//     }
// }
// //call the function inside object
// person.about();

// problem
// if there is multiple persons then for each case we have to write function
// solution
// so we can create only one function and call it from different persons

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


//window object   //javascript's own object
// console.log(this);  
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
// function about(address, phone){
//     console.log(this.firstName,this.age,address,phone);
// }
// const user1 = {
//     firstName: "prasenjit",
//     age: 8,
// }
// const user2 = {
//     firstName: "barsha",
//     age: 7,
// }

//using call method, passing parameters individual
// about.call(user1,"kolkata",9626473);
// about.call(user2,"puen",96473);

//using apply method, passing parameters as array
// about.apply(user1,["kolkata",9626473]);
// about.apply(user2,["kolkata",9626473]);

//bind method returns value into a function and then the function is called
// const func1 = about.bind(user1, "kolkata", 76234);
// const func2 = about.bind(user2, "kolkata", 76234);
// func1();
// func2();


//mistake to avoid
// const user1 = {
//     firstName: "prasenjit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName,this.age);
//     }
// }
// user1.about();

//if we store the about method into another function like that ..it will give undefined
//as myfunc has only the about method but not the object user1
// const myFunc = user1.about;
// myFunc();

//so we have to bind it with object user1
// const myFunc = user1.about.bind(user1);
// myFunc();





//this inside arrow function
//arrow function does not contain this. It takes this from its sarroundings
//in this case this is the window object. not user1 object
// const user1 = {
//     firstName: "prasenjit",
//     age: 8,
//     about: () => {
//         console.log(this.firstName,this.age);
//     }
// }
// user1.about(); //undefined beacuse in arrow function this refers to window object , not user1



// Short syntax for methods
//we can directly make about as a function
// const user1 = {
//     firstName: "prasenjit",
//     age: 8,
//     about(){
//         console.log(this.firstName,this.age);
//     }
// }
// user1.about();








// function creating object
// function allUser(firstName, lastname, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${user.age} years old`;
//     }
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = allUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
// const user2 = allUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
// const user3 = allUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");
// // console.log(user1);
// console.log(user1.firstName);
// console.log(user1.address);
// console.log(user1.email);
// const details = user1.about();
// console.log(details);
// const age = user1.is18();
// console.log(age);

//problem 1
//here the main problem is --> we are creating multiple users and each user calls about and is18 function and each time memory is allocated for these two function
//that consumes much memory spaces

//solution 1
//to solve this, we are separating about and is18 function into an object
//in this case multuple users call the same object through reference and saves memory space

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// function allUser(firstName, lastname, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;   //passing the reference of method
//     user.is18 = userMethods.is18;    //passing the reference of method
//     return user;
// }

// const user1 = allUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
// const user2 = allUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
// const user3 = allUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");
// // console.log(user1.firstName);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user3.about());
// console.log(user3.is18());

// here another problem arises --> see in problem of solution 1 section
// in allUser function we have to mension each method to be called , by passing the reference of method




//Three ways to creating objects
// way 1  //adding key value pairs inside object
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// }

// way 2  //adding key value pairs after creating an empty object
// const obj1 = {};
// obj1.key1 = "value1";
// obj1.key2 = "value2";

// way 3  //creating empty object with reference to another object
// const obj1 = {};
// obj1.key1 = "value1";
// obj1.key2 = "value2";
// const obj2 = Object.create(obj1);  //empty reference object obj2
// obj2.key3 = "value3";
 


// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// }
// const obj2 = {
//     key3: "value3",
// }
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.key2);
// console.log(obj1.key3);  //undefined as obj1 can't access obj2 key
// console.log(obj2.key3);
// console.log(obj2.key1);  //undefined as obj2 can't access obj1 key

//problem 2
//now the problem is if we want to access key value of obj1 by obj2 it giving undefined 
//solution 2
//but we can solve this by creating obj2 object referencing to obj1 object

// ********************  __proto__ or [[prototype]]  *******************

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// }
// const obj2 = Object.create(obj1);  //creating object using __proto__ chain
// obj2.key3 = "value3";
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.key2);  
// console.log(obj2.key3);
// // obj2.key1 = "unique";    //at first obj2 checks if it contains key1 or not. If it contain key1 the calls it . if not then it calls obj1's key1
// console.log(obj2.key1);   

// //****** while creating obj object, then the obj2 object holds the __proto__ / [[prototype]] of obj1 object****
// //__proto__ or [[prototype]] are same 
// // but prototype is different thing
// console.log(obj2.__proto__);




// another problem of solution 1
//here another problem is --> in allUser function we have to mension each method to be called , by passing the reference of method
//solution
//we can minimize it by creating the object user using __proto__ chaining
// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// function allUser(firstName, lastname, email, age, address){
//     const user = Object.create(userMethods);    //creating object using __proto__ chaining
//     user.firstName = firstName;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;

////***Object.create(userMethods) automatically references user with userMethods. so this two lines ot needed to write
//  //   user.about = userMethods.about;
// //    user.is18 = userMethods.is18;

//     return user;
// }

// const user1 = allUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
// const user2 = allUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
// const user3 = allUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");
// // console.log(user1.firstName);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user3.about());
// console.log(user3.is18());







// ******************* prototype *****************

// in javascript , function ====> function + object
// we can use a function like an object
// function hello(){
//     console.log("hello world");
// }
// console.log(hello.name);  //name property tells name of the function

//we can add our own properties
// hello.myProperty = "I am a fresher";
// console.log(hello.myProperty);

//while craeting an function we get some free space which is object {}
// ***** prototype is an object which is automatically created when function is created
// console.log(hello.prototype);   //{}

//only functions provide prototype property. 
// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

//we can add multiple properties(key value pairs) of function by using prototype object
// hello.prototype.name = "prasenjit";
// hello.prototype.age = 23;
// hello.prototype.sing= () => {
//     return console.log("lalala");
// }
// console.log(hello.prototype);
// console.log(hello.prototype.sing());


//so we have seen function by default gives us a prototype object.
//so we don't need to externally create any other object like userMethods
// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }


// function allUser(firstName, lastname, email, age, address){
//     const user = Object.create(allUser.prototype);    //creating object using __proto__ chaining
//     user.firstName = firstName;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// // console.log(allUser.prototype);
// allUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// }
// allUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// const user1 = allUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
// const user2 = allUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
// const user3 = allUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");
// // console.log(user1);
// // console.log(user2);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user3.about());
// console.log(user3.is18());








//******************** new keyword *********************
// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// const user1 = new createUser("prasenjit", 23);

//***** new keyword performs 3 tasks here****
// 1.) automatically creates empty object like---> this = {}
// 2.) return this (empty object)
// 3.) automatically links createUser with prototype object
// it means--> new keyword does --> Object.create(allUser.prototype);

// console.log(user1);
// //if javascript does not find about() in createUser, then __proto__ automatically takes it to the prototype object
// user1.about();

// example
//allUser() function is also called constructor function as it is constructing object
//here we have linked allUser with prototype obejct using new keyword inspite of Object.create() . but in future how will other developer know that it is linked with new or not?
//thats why we should start the function name allUser with capital letter. It ensures that we have linked using new keyword

// function AllUser(firstName, lastname, email, age, address){
//     this.firstName = firstName;
//     this.lastname = lastname;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// AllUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// }
// AllUser.prototype.is18 = function(){
//     return this.age >= 18;
// }

// const user1 = new AllUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
// const user2 = new AllUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
// const user3 = new AllUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");

// console.log(user1);
// console.log(user2);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user3.about());
// console.log(user3.is18());

//only for displaying keys
// for(let key in user1){
//     //show all keys including prototype keys
//     // console.log(key);
//     //shows only user1 keys
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

//here we are creating constructor function, then adding methods in construjctor's prototype and then calling it by new keyword
//it is very long task and in case of inheritance it is problamatic for multiple users
//here we can use class keyword
//in javascript class constructor is fake





// ******** class keyword  *********
// here can name class name AllUser 
// then passing the arguments inside it's constructor 
// then we can directly call functions inside the class without creating explicite functions using prototype
// observe the change between last example and the below example to understand the importance of class keyword
//******** to call class constructor, we must use new keyword ****************

// class AllUser{
//     constructor(firstName, lastname, email, age, address){
//         // console.log("constructor called");
//         this.firstName = firstName;
//         this.lastname = lastname;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
// }

// const user1 = new AllUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
// const user2 = new AllUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
// const user3 = new AllUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");

// // console.log(user1);
// // console.log(user2);
// // console.log(Object.getPrototypeOf(user1));  //to see the prototype of user1
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user3.about());
// console.log(user3.is18());



//example 2  **** (concept of inheritance)***
//base class/ super class/ parent class
// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `name is ${this.name} and age is ${this.age} is eating`;
//     }

//     isCute(){
//         return this.age <= 1;
//     }
// }
// const animal1 = new Animal("tiger",13);
// const animal2 = new Animal("lion",1);

// console.log(animal1.age);
// console.log(animal2.isCute());

// //derived clss/ sub class/ child class
// class Dog extends Animal{

// }
// const tommy = new Dog("tommy",5);   //here tommy object/ instance calling DOg class property which is extended from Animal class
// console.log(tommy.age);
// console.log(tommy.isCute());





// *********** super keyword ********
// super keyword extracts all features of parent class and let child class create its own properties
// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `name is ${this.name} and age is ${this.age} is eating`;
//     }

//     isCute(){
//         return this.age <= 1;
//     }
// }

// //now suppose we want to add property - speed of tommy and a method run
// class Dog extends Animal{
//     constructor(name,age,speed) {
//         super(name,age);
//         this.speed = speed;
//     }
//     run(){
//         return `${this.name} is running at speed ${this.speed}kph`;
//     }
// }

// //here tommy is called --> object / instance of class
// const tommy = new Dog("tommy",5,45);   
// //console.log(tommy);
// console.log(tommy.age);
// console.log(tommy.speed);
// console.log(tommy.run());
// console.log(tommy.eat());




// **** method overriding ***
//it overrides the method of parent class
// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `name is ${this.name} and age is ${this.age} is eating`;
//     }

//     isCute(){
//         return this.age <= 1;
//     }
// }

// class Dog extends Animal{
//     constructor(name,age,speed) {
//         super(name,age);
//         this.speed = speed;
//     }
//     run(){
//         return `${this.name} is running at speed ${this.speed}kph`;
//     }
//     //overriding the eat method
//     eat(){
//         return `modified eat : name is ${this.name} and age is ${this.age} is eating`
//     }
// }

// const animal1 = new Animal("sheru",3);
// console.log(animal1);
// console.log(animal1.eat());

// const tommy = new Dog("tommy",5,45);   
// console.log(tommy.age);
// console.log(tommy.speed);
// console.log(tommy.run());
// console.log(tommy.eat());




//getters and setters
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName){
//         //here we perform array destructuring which splits fullname when space encounters
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new Person("Prasenjit","paul",23);

// //by the underlined syntax --> console.log(person1.fullName), we get only the function , not the values.
// //to get values with that syntax we have to write get keyword infront of the method fullName
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);

// //we can set values by set keyword, which sets fullName method
// person1.fullName = "Barsha Biswas";
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);







// static methods and properties
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `name is ${this.firstName} and age is ${this.age} is eating`;
    }

    isCute(){
        return this.age <= 1;
    }

    // static method
    static classInfo(){
        return `this is inside static method`;
    }
    // static property
    static desc = "this is class property";
}

//here we are creating obejct to call methods of Person class
const person1 = new Person("Prasenjit","paul",23);
console.log(person1.eat());

//**** but using static methods we can directly call methods of Person class without creating object
// console.log(Person.classInfo());
// or
const info = Person.classInfo();
console.log(info);
console.log(Person.desc);