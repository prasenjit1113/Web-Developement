// Synchronous programming vs Asynchronous programming

// js is Synchronous programming single threaded
// console.log("script start");
// for(let i=0; i<10000; i++){
//     console.log("inside loop");
// }
// console.log("script end");


// Asynchronous programming
//setTimeout() --> is a function that takes 2 arguments. one-> as a function, second-> the delay value we want
// js doesn't execute setTimeout(), browser does. js tells browser after how much time setTimeout() to be executed
// console.log("script start");
// setTimeout(() => {
//     console.log("inside loop");
// }, 1000);  //here 1000 == 1000ms == 1s delay
// console.log("script end");

// no matter how much time given in setTimeout(), it always excutes at the end
// console.log("script start");
// setTimeout(() => {
//     console.log("inside loop");
// }, 0);
// for(let i=1; i<100; i++){
//     console.log("...");
// }
// console.log("script end");

//clearTimeout() --> clears the setTimeout() from execution
// console.log("script start");
// const id = setTimeout(() => {
//     console.log("inside loop");
// }, 1000);
// for(let i=1; i<100; i++){
//     console.log("...");
// }
// console.log("setTimeOut id is: ",id);
// console.log("clearing timeout");
// clearTimeout(id);
// console.log("script end");


//setInterval() --> after every interval , it automatically executes
// console.log("script start");
// setInterval(() => {
//     console.log("inside loop");
// }, 1000); 
// console.log("script end");



//index.html linked here

//small project using setInterval() and clearTimeout()
// const body = document.body;
// const intervalId = setInterval(()=> {
//     const red = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const rgb = `rgb(${red},${green},${blue})`;
//     // console.log(rgb);
//     body.style.background = rgb;
// },1000);

// const btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     clearTimeout(intervalId);
//     btn.textContent = body.style.background;
// });




// callback in synchronous programming
//ex-1
// function myFunc1(callback){
//     console.log("func 1 doing");
//     callback();
// }
// myFunc1(()=>{
//     console.log("func 2 doing");
// });

// ex-2
// function getNums(num1,num2,callback){
//     console.log(num1,num2);
//     callback(num1,num2);
// }
// function addNums(n1,n2){
//     console.log(n1+n2);
// }
// getNums(3,5,addNums);
//or
// function getNums(num1,num2,callback){
//     console.log(num1,num2);
//     callback(num1,num2);
// }
// getNums(3,5,(n1,n2)=>{
//     console.log(n1+n2);
// });



// callback in asynchronous programming
// callback, callback hell, pyramid of doom

//index2.html linked here

//task --> change the textcontent and color after the delay
// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// callback hell  
// It is problematic as there are multiple callback functions. 
// That is why promises are introduced
// setTimeout(()=>{
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "two";
//         heading2.style.color = "green";
//         setTimeout(()=>{
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "four";
//                 heading4.style.color = "blue";
//             },1000)
//         },2000)
//     },2000)
// }, 1000)


//same using function
// it is also confusing. we will use promise for it. see line number 315

// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
//   setTimeout(()=>{
//     if(element){
//       element.textContent = text;
//       element.style.color = color;
//       if(onSuccessCallback){
//         onSuccessCallback();
//       }
//     }else{
//       if(onFailureCallback){
//         onFailureCallback();
//       }
//     }
//   },time)
// }
// // pyramid of doom
// changeText(heading1, "one","violet",1000,()=>{
//   changeText(heading2, "two","purple",2000,()=>{
//     changeText(heading3, "three","red",1000,()=>{
//       changeText(heading4, "four","pink",1000,()=>{
//         changeText(heading5, "five","green",2000,()=>{
//           changeText(heading6, "six","blue",1000,()=>{
//             changeText(heading7, "seven","brown",1000,()=>{
//               changeText(heading8, "eight","cyan",1000,()=>{
//                 changeText(heading9, "nine","#cda562",1000,()=>{
//                   changeText(heading10, "ten","dca652",1000,()=>{
                    
//                   },()=>{console.log("Heading10 does not exist")})
//                 },()=>{console.log("Heading9 does not exist")})
//               },()=>{console.log("Heading8 does not exist")})
//             },()=>{console.log("Heading7 does not exist")})
//           },()=>{console.log("Heading6 does not exist")})
//         },()=>{console.log("Heading5 does not exist")})
//       },()=>{console.log("Heading4 does not exist")})
//     },()=>{console.log("Heading3 does not exist")})
//   },()=>{console.log("Heading2 does not exist")})
// },()=>{console.log("Heading1 does not exist")})





// ***************** promise ******************
// (promise means a value we don't know now but in future we will come to know, think example of fried rice)
/*

console.log("script start");

const bucket = ['coffee','chips', 'vegetables', 'salt', 'rice'];

//promise creation
// Promise is declred using new keyword and takes a function (resolve,reject) which are itself individual functions
//here resolve and reject are callback functions which are called executer function as these are executing promise
const friedricePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

//produce
//as a js developer we work more on consume than produce


//consume
//it is the working of promise and it is stored into microtask queue
//friedricePromise.then is like try and friedricePromise.catch is like catch
friedricePromise.then(
    //when promise is resolved
    (myfriedrice)=>{
        console.log("lets eat",myfriedrice);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)

//setTimeout is stored into callback queue
//microtask queue has higher priority than callback queue. thats why promise executes before setTimeout
setTimeout(() => {
    console.log("hello from seTimeout");
}, 0);

for(let i=0;i<10;i++){
    console.log(Math.random(),i)
}

console.log("script end");
*/


// function returning a promise
// function returnPromise(){
//     const bucket = ['coffee','chips', '', 'salt', 'rice'];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//             resolve({value:"friedrice"});
//         }else{
//             reject("could not do it");
//         }
//     })
// }

// returnPromise()
//     .then((myfriedrice)=>{
//         console.log("lets eat",myfriedrice);
//     })
//     .catch(
//     (error)=>{
//         console.log(error);
//     }
// )


//promise && setTimeout
//I want to resolve / reject promise after 2 seconds
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }
// myPromise()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})


//promise.resolve and promise chaining
// promise.resolve
// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{
//     console.log(value);
// })

//promise chaining  
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }
// myPromise()
//     .then((value)=>{
//         console.log(value);
//         value += "Hoo";
//         return value;  //here we can see value / string is returning but actually/internally promise is returning. as we can perform .then() only with promise(or we can say function)
//     })
//     .then((value)=>{
//         console.log(value);
//         value += "boka";
//         return value;
//     })
//     .then((value)=>{
//         console.log(value);
//     })




// Callback hell to flat code
//previous callback example into using promise
/*
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject("element not found");
            }
        },time)
    })
}

// applying promise chaining
changeText(heading1,"one","green",1000)
    .then(()=>changeText(heading2,"two","red",2000))
    .then(()=>changeText(heading3,"three","blue",2000))
    .then(()=>changeText(heading4,"four","yellow",2000))
    .then(()=>changeText(heading5,"five","red",1000))
    .then(()=>changeText(heading6,"six","green",2000))
    .then(()=>changeText(heading7,"seven","red",1000))
    .then(()=>changeText(heading8,"eight","pink",2000))
    .then(()=>changeText(heading9,"nine","green",1000))
    .then(()=>changeText(heading10,"ten","blue",2000))
    
    .catch((error)=>{
        alert(error);
    })
*/