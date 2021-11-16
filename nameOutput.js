function animalcalculation(depth){
    var animal=0;
    if(depth<=10){
        animal=depth*50;
    }
    else if(depth<=20){
        var firstpart=10*100;
        var reming=depth-10;
        var secoundpart=reming*100;
        animal=firstpart+secoundpart;
    }
    else{
        var firstpart=10*50;
        var secoundpart=10*100;
        var reming=depth-20;
        var thirdpart=reming*300;
        animal=firstpart+secoundpart+thirdpart;
    }
    return animal
}
var result=animalcalculation(36);
console.log(result);