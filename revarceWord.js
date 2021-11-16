var number=[2,43,4,3,2,4,5,6,7,8,6,7,5,7]
let unikId=[0];
for(let i=0;i<number.length;i++){
    var element=number[i];
    var index=unikId.indexOf(element);
    if(index==-1){
        unikId=unikId.push(element);
    }
}
console.log(unikId);