function allUser(fname,lname,email,roll,address){
    const use = {};
    use.fname = fname;
    use.lname = lname;
    use.emaiil = email;
    use.roll = roll;
    use.address = address;
    use.about = function(){
        return `name is ${this.fname} and roll is ${this.roll}`;
    }
    return use;
}


const user1 = allUser("prasenjit","paul","22ehhwiu@gmailcm",24,"kolkata");
// const user2 = allUser("ram","roy","33jdhu@gmailcm",14,"hydrabad");
// const user3 = allUser("shaym","singh","44jhsdbu@gmailcm",18,"pune");
console.log(user1);
console.log(user1.fname);
console.log(user1.address);
// console.log(user1.email);
const details = user1.about();
console.log(details);
// const age = user1.is18();
// console.log(age);