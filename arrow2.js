// const doubleIt=function myFun(num){
//     return num*2;
// }
// const result=doubleIt(5);
// console.log(result);
// const doubleIt=num=> num*2;
// const result=doubleIt(5);
// console.log(result);
// const add= (x,y)=> x+y;
// const result=add(4,5);
// console.log(result);
// const give5=()=>5;
// const result2=give5();
// console.log(result2);

const math=(x,y)=>{
    const sum=x + y;
    const diff=x - y;
    const result=sum * diff;
    return result;
}
const result=math(6,7);
const result2=Math.abs(result);
console.log(result2);