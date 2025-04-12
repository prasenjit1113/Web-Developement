// More useful things 

//iterables
//on which we can use for of loop
//****** strings, arrays are iterable*******
// const name = "PrasenJit";
// const name = ["PrasenJit","Akash","sumit","chiku","ankit"];
// for(let c of name){
//     console.log(c);
// }

//******but objects are not iterable*******
// const objects = {
//     name: "prasenjit",
//     age: 23,
//     address: "kolkata",
// }
// for(let obj of objects){
//     console.log(obj);
// }

//**** array like objects
//those who have length property and can be accessed by index , are called array like objects
//example -> string
// const str = "hello";
// console.log(str.length);
// console.log(str[3]);





//***sets (it is iterable)
//it stores data in any order
//stores only unique items (no duplicates)
//It has its own methods
//can not be accessed by index

//method 1
// const numbers = new Set([2,3,5,1]);
// console.log(numbers);

//method 2
// const numbers = new Set();
// const items = ["it1","it2","it3","it4"];
// numbers.add(5);
// numbers.add(7);
// numbers.add(4);
// numbers.add(2);
// numbers.add(items);  //set storing arrays
// numbers.add([3,5,1]);
// numbers.add([3,5,1]);  //here same array points different locations , so it can be added to set

// console.log(numbers);
// if(numbers.has(4)){
//     console.log("present");
// }else{
//     console.log("not present");
// }

// for(let num of numbers){
//     console.log(num);
// }

//store unique elements from array
// const myArray = [2,6,4,2,4,7,8,4,1,6,7,3];
// const set = new Set(myArray);
// console.log(set);
// console.log(myArray);
// console.log(myArray.length);  //length of array
// console.log(set.size);       //length of set






//maps
// it store data in ordered fashion
//stores key value pairs like objects
// unlike objects, map is an iterable
// duplicate keys are not allowed like objects

// ************difference between maps and objects**********
// i) objects can only have string or symbol as key 
//    But in maps you can use anything as key like array, number, string 
// ii) objects are not iterable but maps are iterable

//in objects 
// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

//in maps 
//method 1
// const person = new Map([["name","Prasen"],["age",23],[1,"one"]]);
// console.log(person);

//method 2
// const person = new Map();
// person.set("name","Prasenjit");
// person.set("age",23);
// person.set(1,"one");
// person.set([1,2,3],"onetwothree");
// person.set({1:"one"},"onee");
// console.log(person.name); //undefined - as map can't be accessable like objects
// console.log(person);
// console.log(person.get("name"));
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof(key));
// }

//map is accesible by for of loop and iterable through array
// for(let [key, value] of person){
//     console.log(key, value);
// }

//example 2
// const person1 = {
//     id: 1,
//     name: "prasenjit",
// }
// const person2 = {
//     id: 2,
//     name: "prasen",
// }
// const map = new Map();
// map.set(person1,{"salary": 80000, "age": 23});
// map.set(person2,{"salary": 90000, "age": 24});
// console.log(person1.id);
// console.log(map.get(person1).age);
// console.log(map.get(person2).age);





// clone using Object.assign
// const obj = {
//     key1: "value1",
//     key2: "value2",
// }
// // const obj1 = obj;  //here obj and obj1 points to same memory. so any changes in obj reflects obj1
// const obj1 = {...obj};//but using spread operator obj1 pointing different memory location. so any changes in obj does not reflects obj1
// // const obj1 = Object.assign({},obj);  //old use of without spread operator
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj1);




//optional chaining
//when any feature/data is not declared yet but in future the feature will be introduced, in this case we don't want our code to give error so we use ? , that gives undefined message inspite of error if required data is not present
// const user = {
//     firstName: "Prasen",
//     // address: {kolkata: "2234"},
// }
// console.log(user?.firstName);
// console.log(user?.address?.kolkata);
