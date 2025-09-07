// 1.) xmlHTTPRequest (old way of doing)
//we hardly use this anymore

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);



//this function runs for readystate 1,2,3,4
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr);
//         const response = xhr.response;  //JSON data comes with data type String
//         console.log(typeof response);
//         const data = JSON.parse(response); //the JSON data is converted into Object type
//         console.log(typeof data);
//     }
// }
// xhr.send();



//this function will work only when readystate = 4
xhr.onload = function(){
    // console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response); //the JSON data is converted into Object type
    console.log(typeof data);  //the JSON data is converted into Object type
}
xhr.send();