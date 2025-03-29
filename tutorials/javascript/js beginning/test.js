function func2(){
    console.log("inside func2");
}
function func1(){
    console.log("inside func1");
    return func2();
}

func1();