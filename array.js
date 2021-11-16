function arraySum(myArray){
    if(myArray.length==1){
        return myArray[0];
    }
    else{
        return myArray.pop() + arraySum(myArray);
    }
}
console.log(arraySum([1,2,3]));

