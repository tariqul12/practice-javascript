// function doubleIt(num){
//     return num *2;
// }
// const doubleIt=function(num){
//     return num* 2;
// }
const doubleIt=num =>num*2;
const add=(num1,num2=0) => num1+num2;
const give5=()=>5;
const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    let result=sum*diff;
    if(result<0){
        result=undefined;
        return result;
    }
    return result;
}

// const result=add(50,50);
// const result2=doMath(10,5);
// console.log(result2);
// const result3=give5()
// console.log(result3);
//traditional Anonymous Function.
// function (a,b){
//     return a+b+100;
// }
//Arrow function
const arrow=(a=0,b=0)=>a+b+100;
const result=arrow(12,10);
console.log(result);
(a,b)=>{
    let chuck=10;
    return a+b+chuck;
}
const result2=(10,20);
console.log(result2);