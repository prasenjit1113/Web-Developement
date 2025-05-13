// Intro to Events

//to add events , we use method --> addEventListener(event name, function)
// const btn = document.querySelector(".btn-headline");
// // console.log(btn);
// btn.addEventListener("click",()=>{
//     console.log("you clicked me!!!!!");
// });



//***This keyword inside eventListener callback
// const btn = document.querySelector(".btn-headline");

//in case of normal function value of this will be the element on which the function is working
// btn.addEventListener("click",function(){
//     console.log("you clicked me!!!!!");
//     console.log("value of this is");
//     console.log(this);
// });

//in case of arrow function value of this will be window object
// btn.addEventListener("click",()=>{
//     console.log("you clicked me!!!!!");
//     console.log("value of this");
//     console.log(this);
// });



// Add events on multiple elements
// const allButtons = document.querySelectorAll(".my-buttons button");
// // console.log(allButtons)
// for(button of allButtons){
//     button.addEventListener("click",function(){
//         // console.log(this);
//         console.log(this.textContent);
//         console.log("you clicked me!!!!!");
//     });
// }



// **Event object
// const firstButton = document.querySelector(".one");
// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features(WebApi)

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser does----- 2 tasks
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 

// const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         // console.log(e.target);
//         console.log(e.currentTarget);
//     })
// }


// Practice with events
//cxhange the bgcolor and color of button if clicked
// const allbtn = document.querySelectorAll(".my-buttons button");
// console.log(allbtn.length);
// allbtn.forEach(button =>{
//     button.addEventListener("click",(e)=>{
//         // console.log(e.target);
//         e.target.style.backgroundColor = "yellow"
//         e.target.style.color = "green"
//     })
// })