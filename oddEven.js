function evenify(num){
    var result;
    if(num%2===0){
        result= num;
    }
    else{
        result= num * 2;
    }
    return result;
}
var result=evenify(13);
var square=result*result;
console.log(result);

function evenif_all(nums){ 
    var even_array=[];
    for(var i=0;i<nums.length;i++){
        const num=nums[i];
        var result=evenify(num);
        even_array.push(result);
    }
    return even_array;
}
var num=[4,12,86,45,18,8];
var result=evenif_all(num);
console.log(result);