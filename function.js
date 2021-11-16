function evenify_all(nums){
    for(let i =0;i<nums.length;i++){
        const num=nums[i];
        if(num%2===0){
            console.log(num,'is even number');
        }
        else{
            console.log(num*2,'is odd number');
        }
    }
}
friends=[12,34,54,12,33,77,99,13];
evenify_all(friends);