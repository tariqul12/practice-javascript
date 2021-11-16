function arrayDiglar(marks){
    var larger=marks[0];
    for(var i=0;i<marks.length;i++){
        var element=marks[i];
        if(element>larger){
            larger=element;
        }
        
        
    }
    return larger;
   
}
var numbers=[61,45,76,85,896,945,846,89]
var output=arrayDiglar([23,43,45,12])
var result=arrayDiglar(numbers);
console.log(output);
console.log("result",result);