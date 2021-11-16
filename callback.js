function evenify(num){
    var result=0;
    if(num%2==0){
        return result;
    }
    else{
        
        return num * 2;
    }
}
var result=evenify(13);
var square=result*result;
console.log(square);




function evenify_all(nums){
    var evenArray=[];
    for(var i=0;i<nums.length;i++){
        const num=nums[i];
        var result=evenify(num);
        evenArray.push(result);
    }
    return evenArray;
}
var num=[4,45,65,34,77,99,13,99];
var result=evenify_all(num);
console.log(result);