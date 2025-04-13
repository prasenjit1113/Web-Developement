
class AllUser{
    constructor(firstName, lastname, email, age, address){
        this.lastname = lastname;
        this.firstName = firstName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
}

const user1 = new AllUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
const user2 = new AllUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
const user3 = new AllUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");
// console.log(user1.firstName);
console.log(user1.about);
console.log(user1.is18());
console.log(user2.about());
console.log(user2.is18());
console.log(user3.about());
console.log(user3.is18());