var fruits=["Banana","Apples","Durian","Cherries"]
fruits.sort();
console.log(fruits);
var numbers=[5,3,2,4,1,6,8];
// numbers.sort(compareFunction);
// console.log(numbers);
numbers.sort((a,b)=> a-b);
console.log(numbers);
const lowest= numbers[0];
console.log(lowest);
// function compareFunction(a,b){
//     return a-b;
// }
// console.log(numbers);
numbers.sort((a,b)=> b-a);
console.log(numbers);
var highest=numbers[0];
console.log(highest);
