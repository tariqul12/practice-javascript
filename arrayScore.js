const numbers=[2,11,22,33,44,32,45,54,21,23];
// const outPut=[];
// for(let i=0;i<numbers.length;i++){
//     const element=numbers[i];
//     const result=element*element;
//     outPut.push(result);
// }
// function square(element){
//     return element*element;
// }
// const result=square=(element)=>{
//     element*element;
// }

// const outPut=numbers.map(function(element){
//     return element*element;
// });

// const result=numbers.map(x=>x*x);
// console.log(result);

const result = numbers.filter(x=>x<5);
const isThere=numbers.find(x=>x>30);
console.log(isThere);