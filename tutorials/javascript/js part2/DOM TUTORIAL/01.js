//DOM (Document Object Model)
// overview  -->    how to use    -->     deep study

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
//textcontent property (shows all text with hidden text and can change text)
// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "come on";
// console.log(mainHeading.textContent);

//innerText property (shows only text not the hidden text and can change text)
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

//get and set attributes
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
//simple for loop  for HTMLCollection
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
// const navItems = document.querySelectorAll("a");  // Node List 
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