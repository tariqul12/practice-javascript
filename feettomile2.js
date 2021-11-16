function feetToMile(feet){
    if(feet<0){
        return 'sorry, the length can not be regative'
    }
    else{
        let mile=feet/5280;
        return mile.toFixed(3);
    }
}
const result=feetToMile(54325);
console.log(result);