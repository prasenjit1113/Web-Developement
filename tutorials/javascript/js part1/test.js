function hello(){
    console.log("hello world");
}
console.log(hello.name);  //name property tells name of the function

hello.myProperty = "I am a fresher";
console.log(hello.myProperty);
hello.prototype.age = 22;
console.log(hello.age)

console.log(hello.prototype)