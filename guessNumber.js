//Get a rendom integer from 1 to 10 inclusive
const num=Math.ceil(Math.random()*10);
console.log(num);
const gnum=prompt('guess the number between 1 and 10 inclusive');
if (gnum==num){
    console.log('the number is matched');
}
else{
    console.log('The number is Not matched,the number was'+gnum);
}