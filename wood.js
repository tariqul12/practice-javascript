function woodCalculator(chair,table,bad){
    var chairWood=chair*1;
    var tableWood=table*3;
    var badWood=bad*5;
    if(chair<0){
        return "Quantity can't be regative."
    }
    if(table<0){
        return "Quantity can't be regative"
    }
    if(bad<0){
        return "quantity can't be regative"
    }
    var totalWood=chairWood+tableWood+badWood;
    return totalWood;
}
var result=woodCalculator(1,5,-1);
console.log(result);