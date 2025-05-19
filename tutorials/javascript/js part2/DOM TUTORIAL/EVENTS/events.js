// Intro to Events

//clickEvent.html linked here

//to add events , we use method --> addEventListener(event name, function)
// const btn = document.querySelector(".my-buttons button");
// // console.log(btn);
// btn.addEventListener("click",()=>{
//     console.log("you clicked me!!!!!");
// });


//***This keyword inside eventListener callback
// const btn = document.querySelectorAll(".my-buttons button");

// //in case of normal function value of this will be the element on which the function is working
// btn.addEventListener("click",function(){
//     console.log("you clicked me!!!!!");
//     console.log("value of this is");
//     console.log(this);
// });

//but in case of arrow function value of this will be window object
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
//change the bgcolor and color of button if clicked
// const allbtn = document.querySelectorAll(".my-buttons button");
// console.log(allbtn.length);
// allbtn.forEach(button =>{
//     button.addEventListener("click",(e)=>{
//         // console.log(e.target);
//         e.target.style.backgroundColor = "yellow"
//         e.target.style.color = "green"
//     })
// })


//keypress event and mouseover event
// keypress event --> any key pressed on webpage, it will be shown in console
// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })
//mouseover event --> when mouse hovered 
// const myButton = document.querySelector(".my-buttons");
// console.log(myButton);
// myButton.addEventListener("mouseover",()=>{
//     console.log("mouseover event occured")
// })
//mouseleave event --> when mouse not hovered
// const myButton = document.querySelector(".my-buttons");
// console.log(myButton);
// myButton.addEventListener("mouseleave",()=>{
//     console.log("mouseover event occured")
// })




//demo.html linked here
//demo project --> random color generator by clicking on button and show in rgb format

// const mainbtn = document.querySelector("button");
// const body = document.body;
// const currColor = document.querySelector(".current-color");
// function randomColorGenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`
//     return randomColor;
// }
// mainbtn.addEventListener("click",()=>{
//     const randomColor = randomColorGenerator();
//     console.log(randomColor);
//     body.style.backgroundColor = randomColor;
//     currColor.textContent = randomColor;
// })



// event_bubbling.html linked here
// Event bubbling & Event Capturing & event delegation

// Event bubbling / propagation  --> goes from inner to outer
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// child.addEventListener("click",()=>{
//     console.log("bubbling on child")
// })
// parent.addEventListener("click",()=>{
//     console.log("bubbling on parent")
// })
// grandparent.addEventListener("click",()=>{
//     console.log("bubbling on grandparent")
// })
// document.body.addEventListener("click",()=>{
//     console.log("bubbling on body")
// })


// Event Capturing  --> goes from outer into inner
// Event Capturing gets priority over event bubbling, that's why it(Event Capturing) always prited first
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// child.addEventListener("click",()=>{
//     console.log("bubbling on child")
// })
// parent.addEventListener("click",()=>{
//     console.log("bubbling on parent")
// })
// grandparent.addEventListener("click",()=>{
//     console.log("bubbling on grandparent")
// })
// document.body.addEventListener("click",()=>{
//     console.log("bubbling on body")
// })

// child.addEventListener("click",()=>{
//     console.log("captured!!! child")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("captured!!! parent")
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("captured!!! grandparent")
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("captured!!! body")
// },true)


//as child and parent belong to grandparent so, don't need to add event to all
//just add into grandparent . It is called event delegation
// event delegation
// const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click",(e)=>{
//     console.log(e.target)
// })




// small todo list Project Using Event Delegation

//link to index.html

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();  //**** to prevent auto reload of page
    // console.log(todoInput.value); //show typed text in console

    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
          <span class="text">${newTodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
        `;
    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi);
    todoList.append(newLi);
    todoInput.value = ""; //auto erase typed text
});

// //use of Event Delegation
todoList.addEventListener("click", (e)=>{
    //check if user clicked on done button
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
})