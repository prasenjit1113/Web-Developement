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