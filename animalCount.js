function animalCalcolator(depth){
    var animal=0;
    if(depth<=10){
        animal=depth*50;
    }
    else if(depth<=20){
        var firstPart=10*50;
        var reming=depth-10;
        var secoundPart=reming*100;
        animal=firstPart+secoundPart;
    }
    else{
        var firstPart=10*50;
        var secoundPart=10*100;
        var reming=depth-20;
        var thirdPirt=reming*300;
        animal=firstPart+secoundPart+thirdPirt;        
    }
    return animal;
}
var result=animalCalcolator(12);
console.log(result);