function outerFunc(name,sal){
    function innerFunc(){
        console.log(name,sal);
    }
    return innerFunc;
}
const ans = outerFunc("pro",80000);
// console.log(ans);
ans();