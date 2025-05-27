//my way

// let counter = 0;
// const body = document.body;

// //generate random color
// function randomColorGenerator(){
//     const red = Math.floor(Math.random() *256);
//     const green = Math.floor(Math.random() *256);
//     const blue = Math.floor(Math.random() *256);
//     const colors = `rgb(${red},${green},${blue})`;
//     return colors;
// }

// const value = document.querySelector(".value");

// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");

// btn1.addEventListener("click",()=>{
//     counter++;
//     value.textContent = counter;

//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;  //applying random color
// })
// btn2.addEventListener("click",()=>{
//     counter--;
//     value.textContent = counter;

//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;  //applying random color
// })
// btn3.addEventListener("click",()=>{
//     counter=0;
//     value.textContent = counter;
    
//     body.style.backgroundColor = "grey";
// })






//chatGPT's way
let counter = 0;
const body = document.body;
const value = document.querySelector(".value");
const buttons = document.querySelectorAll("button");

function changeColor(){
    const color = `rgb(${Math.floor(Math.random() *256)},
                        ${Math.floor(Math.random() *256)},
                        ${Math.floor(Math.random() *256)})`;
    body.style.backgroundColor = color;
}

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        const className = e.target.className;
        if(className === "btn1"){
            counter++;
            changeColor();
        }
        else if(className === "btn2"){
            counter--;
            changeColor();
        }
        else if(className === "btn3"){
            counter = 0;
            body.style.backgroundColor="grey";
        }
        value.textContent = counter;
    })
})
