// Object reference type
// arrays are good but not sufficient, so object came
// objetcs store real world data
// objects store key value pairs
// Objects don't have index

//how to create objects (key-value pairs)
//by default keys are strings
// const person = {name: "Prasenjit", age: 23};
//or

// const person = {
//     name: "Prasenjit", 
//     age: 23,
//     hobbies: ["cricket", "movies", "series"]
// }
// console.log(typeof person);
// console.log(person);

//how to access data from objects
//using .(dot) notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// using [] (bracket) notation
// console.log(person["name"]);
// console.log(person["age"]);

//how to add key value pairs to objects
// person.gender = "male";
// console.log(person);


//difference between dot v/s bracket notation
// const person = {
//     name: "Prasenjit", 
//     age: 23,
//     "person hobbies": ["cricket", "movies", "series"]
// }
// console.log(person.name);
// //if there is multiple words in key, then we can't use dot. we have to use bracket notation
// console.log(person["person hobbies"]);


//iterate in object (using for in loop and using object.keys)
// const person = {
//     name: "Prasenjit", 
//     age: 23,
//     "person hobbies": ["cricket", "movies", "series"]
// }

//using for in loop
// for(let key in person){
//     // console.log(key);           //display only keys
//     // console.log(person[key]);   //display only values
//     console.log(key, " : ",person[key]);   //display both
// }

//using object.keys
// console.log(Object.keys(person));
// console.log(Object.values(person));


//computed properties
// const key1 = "objkey1";
// const key2 = "objkey2";
// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj);
// or

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);


//spread operator in array
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// const newArr = [...arr1, ...arr2];
// console.log(newArr);

//spread operator in objects
// const arr1 = {
//     key1 : "value1",
//     key2 : "value2",
// };
// const arr2 = {
//     key3 : "value3",
//     key4 : "value4",
//     key1 : "valueeihwdh"    //overrides the key1 value
// };
// console.log(arr1);
// console.log(arr2);
// const newArr = {...arr1, ...arr2};
// const newArr = {...arr1, ...arr2, key69 : "hello"}
// console.log(newArr);


//object destructuring
// const band = {
//     bandName : "led zepplin",
//     famousSong : "stairway to heaven",
//     year : 2025,
//     place : "India",
// };
// const bName = band.bandName;
// const fSong = band.famousSong;
// console.log(bName,": ", fSong);

//using destructuring
// const {bandName, famousSong} = band;
// console.log(bandName,": ", famousSong);
//or

// const {bandName: bName, famousSong: fSong, ...restKeys} = band;
// console.log(bName,": ", fSong, " ", restKeys);


//objects inside array
//very useful in real world applications
// const users = [
//     {userId: 1, firstName: "Prasenjit", gender: "male"},
//     {userId: 2, firstName: "Barsha", gender: "female"},
//     {userId: 3, firstName: "Ram", gender: "male"},
//     {userId: 4, firstName: "Sita", gender: "female"},
// ]
// console.log(users);
//for array "for of" loop preferable and for objects "for in" loop preferable
// for(let user of users){
//     // console.log(user.user);
//     console.log(user.firstName);

// }


//nested destructuring
const users = [
    {userId: 1, firstName: "Prasenjit", gender: "male"},
    {userId: 2, firstName: "Barsha", gender: "female"},
    {userId: 3, firstName: "Ram", gender: "male"},
    {userId: 4, firstName: "Sita", gender: "female"},
]
//extracting gender from 1st object and firstname from 4th object
const [{gender:gen}, , ,{firstName: fname}] = users;
console.log(fname);
console.log(gen);

