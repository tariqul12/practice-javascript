function revarceNumber(n){
    n=n+"";
    return n.split("").reverse().join("");
}
const result=revarceNumber(342567);
console.log(result);