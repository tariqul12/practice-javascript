function getArraySum(numbers){
    var sum=0;
    for(let i=0;i<=numbers.length;i++){
        var element=numbers[i];
        sum=sum+element;
    }
    return sum;
}
console.log(getArraySum([12,23,34,45,56]));