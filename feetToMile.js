function feetTomile(feet){
    if(feet<0){
        return "sorry,the length can't be regative."
    }
    else{
        var mile=feet/5280;
        var next=mile.toFixed(5)
        return next;
    }
}
const result=feetTomile(435);
console.log(result);