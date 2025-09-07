// 2.) fetch API (new way of doing)

//Getting a resource

// const URL = "https://jsonplaceholder.typicode.com/posts";
// // console.log(fetch(URL));  //here fetch is promise so we can use .then
// fetch(URL)
//     .then(response =>{
//         // console.log(response.json());  //it also gives promise
//         if(response.ok){
//             return response.json()
//         }else{
//             throw new Error("somthing went wrong!!!")
//         }
//     })
//     .then(data =>{
//         console.log(data);  //now we get the json objects
//     })
//     //in fetch(),the .catch() can't throw error if problem in code , it only throw error when internet is disconnected
//     //in this case to show error we have to throw error in .then()
//     .catch(error =>{
//         console.log(error);
//     })



//Creating a resource

const URL = "https://jsonplaceholder.typicode.com/posts";
fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("somthing went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);  
    })
    .catch(error =>{
        console.log(error);
    })