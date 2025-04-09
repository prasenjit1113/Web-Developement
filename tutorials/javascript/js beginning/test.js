// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
function allUser(firstName, lastname, email, age, address){
    this.lastname = lastname;
    this.firstName = firstName;
    this.email = email;
    this.age = age;
    this.address = address;
}
allUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`;
}
allUser.prototype.is18=function(){
    return this.age >= 18;
}

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


const user1 = new allUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
const user2 = new allUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
const user3 = new allUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");
// console.log(user1.firstName);
console.log(user1.about);
console.log(user1.is18());
console.log(user2.about());
console.log(user2.is18());
console.log(user3.about());
console.log(user3.is18());