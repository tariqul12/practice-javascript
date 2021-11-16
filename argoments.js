function evenify(num){
    var result;
    if(num%2===0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}
var result=evenify(13);
var square=result*result;
console.log(result);
console.log(square);

function evenif_all(nums){
    var even_array=[];
    for (var i=0;i<nums.length;i++){
        const num=nums[i];
        var result=evenify(num);
        even_array.push(result);
    }
    return even_array;
}
var num=[3,4,67,87,47,35,85,23,14,54];
var result=evenif_all(num);
console.log(result);