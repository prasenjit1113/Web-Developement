// Object Oriented JavaScript / Prototypal Inheritance --> part2


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
//that's why we should start the function name allUser with capital letter. It ensures that we have linked using new keyword

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

//here we are creating constructor function, then adding methods in constructor's prototype and then calling it by new keyword
//it is very long task and in case of inheritance it is problematic for multiple users
//here we can use class keyword
//in javascript class constructor is fake





// ******** class keyword  *********
// here name the class name as AllUser 
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
// const tommy = new Dog("tommy",5);   //here tommy object/ instance calling Dog class property which is extended from Animal class
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







// ** static methods and properties
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
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get eat(){
//         return `name is ${this.firstName} and age is ${this.age} is eating`;
//     }

//     isCute(){
//         return this.age <= 1;
//     }

//     // static method
//     static classInfo(){
//         return `this is inside static method`;
//     }
//     // static property
//     static desc = "this is class property";
// }

// //here we are creating obejct to call methods of Person class
// const person1 = new Person("Prasenjit","paul",23);
// console.log(person1.eat);

// //**** but using static methods we can directly call methods of Person class without creating object
// // console.log(Person.classInfo());
// // or
// const info = Person.classInfo();
// console.log(info);
// console.log(Person.desc);