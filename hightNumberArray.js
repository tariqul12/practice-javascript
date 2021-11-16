
const getArraySum=(number)=>{
    let sum=0;
for(let i=0;i<number.length;i++){
    const element=number[i]
    sum=sum+element;
   
}
return sum;
}
let num =[49,34,5,6,35,23,55];
const result=getArraySum(num);
console.log(result);