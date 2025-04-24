// Deeply understand dom tree, root node , element nodes, text nodes
// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);  //print child of rootnode
// const htmlElementNode = rootNode.childNodes[1];   //output--> NodeList(3) [head, text, body]
// console.log(htmlElementNode.childNodes);  //print 1 indexed child of rootnode

//print children of nextnodes
//child relationship
// const ele1 = htmlElementNode.childNodes[0];  
// const ele2 = htmlElementNode.childNodes[1];
// const ele3 = htmlElementNode.childNodes[2];
// console.log(ele1);
// console.log(ele2);   //text means newline (\n)
// console.log(ele3);

//parent relationship
// console.log(ele1.parentNode);

//sibling relationship
//by nextSibling, we get the first sibling as newline(text) after that we get next sibling
// console.log(ele1.nextSibling);
// console.log(ele1.nextSibling.nextSibling);
//but by using nextElementSibling, we directly get next sibling skipping the newline(text)
// console.log(ele1.nextElementSibling);  //same as ele1.nextSibling.nextSibling

//prints childnodes od ele1 including newlines(texts)
// console.log(ele1.childNodes);




//** task--> go to the parent of h1 tag and change its color and bgcolor
// const h1tag = document.querySelector("h1");

//change color of parent container class of h1 tag
// const classContainer = h1tag.parentNode;
//change color of grandparent body of h1 tag
// const classContainer = h1tag.parentNode.parentNode;

// console.log(classContainer);
// classContainer.style.color = "red";
// classContainer.style.backgroundColor = "yellow";



//directly select body, head
// const body = document.querySelector("body");
// or
// const body = document.body;
// console.log(body);
// body.style.color = "red";
// body.style.backgroundColor = "yellow";

// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title)
// console.log(title.childNodes)



// const container = document.querySelector(".container");
// console.log(container);
// //shows all children including newline/texts
// console.log(container.childNodes);
// //shows only children excluding newline/texts
// console.log(container.children);
