//DOM (Document Object Model)
// overview    -->    how to use    -->     deep study

//everything in html file is stored in document object
// console.dir(document);

// Select elements using id
// console.log(document.getElementById("main-heading"));
// console.log(typeof document.getElementById("main-heading"));
// const ans = document.getElementById("main-heading");
// console.log(ans);

// Select any elements using query Selector
//selecting id
// const mainHeading = document.querySelector("#main-heading");
//selecting class
// const mainHeading = document.querySelector(".nav-item");
// console.log(mainHeading);


//** // textcontent v/s innertext 
//textcontent property (shows all text including hidden text and can change the text)
// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "come on";
// console.log(mainHeading.textContent);

//innerText property (shows only text excluding the hidden text and can change text)
// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.innerText)
// mainHeading.innerText = "come on";
// console.log(mainHeading.innerText);

//change the styles of elements
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.color = "blue";
// mainHeading.style.backgroundColor = "red";
// mainHeading.style.border = "5px solid green";

//getattribute and setattribute
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// link.style.color = "red";
// link.setAttribute("href","https://google.com");
// console.log(link.getAttribute("href"));

// get multiple elements using getElements by class name
// const navItems = document.getElementsByClassName("nav-item");  // HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems));

// get multiple elements using querySelectorAll
// const navItems = document.querySelectorAll("nav-item");  // NodeList is a array like object
// console.log(navItems);
// console.log(Array.isArray(navItems));




//loop
// 3 loops --> simple for loop, for of loop, forEach loop

//loops for HTMLCollection
//simple for loop for HTMLCollection
// const navItems = document.getElementsByTagName("a");  
// for(let i=0; i<navItems.length; i++){
    // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.fontWeight = "bold";
// }
    
//for of loop for HTMLCollection
// const navItems = document.getElementsByTagName("a");  
// for(let navItem of navItems){
    //     console.log(navItem);
    //     navItem.style.color = "blue";
    //     navItem.style.backgroundColor = "yellow";
    //     navItem.style.fontWeight = "bold";
// }
        
//forEach loop for HTMLCollection
// *we can't use foreach loop directly to iterate through HTMLCollection
// for that reason we have to change its type object to array to iterate through HTMLCollection
// let navItems = document.getElementsByTagName("a"); 
// navItems = Array.from(navItems);  //change into array
// // console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     console.log(navItem);
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.fontWeight = "bold";
// });


//loops for NodeList
// simple for loop for NodeList
// const navItems = document.querySelectorAll("a");  // NodeList 
// for(let i=0; i<navItems.length; i++){
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.fontWeight = "bold";
// }

//for of loop for NodeList
// const navItems = document.querySelectorAll("a");  
// for(let navItem of navItems){
//         console.log(navItem);
//         navItem.style.color = "blue";
//         navItem.style.backgroundColor = "yellow";
//         navItem.style.fontWeight = "bold";
// }
        
//forEach loop for NodeList
// let navItems = document.querySelectorAll("a"); 
// navItems.forEach((navItem)=>{
//     console.log(navItem);
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.fontWeight = "bold";
// });


//innerHTML
// const headLine = document.querySelector(".headline");
// // console.log(headLine.innerHTML);
// //changes using innerHtML
// headLine.innerHTML = "<h1>Welcome Prasenjit</h1>";
// headLine.innerHTML += "<button class=\"btn\"> Learn more </button>"
// console.log(headLine.innerHTML);




//classList property 
//shows all the class names
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);

//add class property in css file and add the name under format to get expected output
// sectionTodo.classList.add("bg-dark");

//delete class property 
// sectionTodo.classList.remove("container");
// console.log(sectionTodo.classList);

// check if any class exists or not
// const ans = sectionTodo.classList.contains("container");
// const ans = sectionTodo.classList.contains("headlines");
// console.log(ans);

//if there is already bg-dark class property applied, the toggle removes the property
//if there does not any bg-dark class property applied, the toggle adds the property
// sectionTodo.classList.toggle("bg-dark");

//add bg-dark property to header
// const header = document.querySelector(".header");
// header.classList.add("bg-dark");






// Add new elements to page using
//  1. document.createElement()
//  append , prepend, remove ,before , after

//directly add list item in js

// append and prepend
//i. create a list item
// const newTodoItem = document.createElement("li");
//ii. initialize the item
// newTodoItem.textContent = "Teach students";
//iii. select where to add the list item
// const todoList = document.querySelector(".todo-list");
//iv. appends the list item
// todoList.append(newTodoItem);
//iv. prepends the list item
// todoList.prepend(newTodoItem);

// remove list item
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

//before , after
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);


// Add new elements to page using
// 2. some old methods to support poor IE
// appendChild, insertBefore, replaceChild, removeChild

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.appendChild(newTodoItem);
// // todoList.remove();



// static list vs live list  (static list is better as it consumes less memory than live list)
//static list --> displays 6th list in browser but in reality it does not appends
// const listItems = document.querySelectorAll(".todo-list");
// const sixthItem = document.createElement("li");
// sixthItem.textContent = "list 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthItem);
// console.log(listItems);

//live list --> displays and appends 6th list in browser as well as reality
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// const sixthItem = document.createElement("li");
// sixthItem.textContent = "list 6";
// ul.append(sixthItem);
// console.log(listItems);


// How to get the dimensions of the element
//height , width
// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);