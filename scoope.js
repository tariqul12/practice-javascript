const bonus = 20;
function sum(first,second){
    let result=first +second +bonus;
    console.log(bonus);
    if(result>9){
        var mood="happy";
        mood="fishy";
        mood="funky"
        mood="crank"
        console.log(mood);
    }
    console.log(mood);
    
    return result;
}
const outPut = sum(3,7);

console.log(outPut);