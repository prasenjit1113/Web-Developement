//important array methods
//forEach (not important)
// map  (**important ..specially in react)
// filter (not important)
// reduce

//forEach (not important)
// const numbers = [4,2,5,8];
// function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// }
// for(let i=0;i<numbers.length; i++){
//     myfunc(numbers[i],i);
// }

//foreach --> automatically takes value and its corresponding index.
// numbers.forEach(myfunc);

// const users = [
//     {firstName: "prasenjit", age: 23},
//     {firstName: "ram", age: 24},
//     {firstName: "sham", age: 22},
//     {firstName: "jadu", age: 21},
// ]
// users.forEach(function(user){
//     console.log(user.firstName);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


// map  (**important ..specially in react)
//it uses callback function
const numbers = [3,4,5,2,1,6];
// const square = function(number){
//     return number*number;
// }
// const squareNum = numbers.map(square);
//or

const squareNum = numbers.map(function(number){
    return number*number;
})
console.log(squareNum);
