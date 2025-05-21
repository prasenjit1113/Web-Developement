// Synchronous programming vs Asynchronous programming

// js is Synchronous programming single threaded
// console.log("script start");
// for(let i=0; i<10000; i++){
//     console.log("inside loop");
// }
// console.log("script end");


// Asynchronous programming
//setTimeout() --> is a function that takes 2 arguments. one-> as a function, second-> the delay value we want
// js doesn't executes setTimeout(), browser does. js tells browser after how much time setTimeout() to be executed
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


//setInterval()

