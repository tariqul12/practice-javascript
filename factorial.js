function fiboNacci(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    else{
    return fiboNacci(n-1)+fiboNacci(n-2);

    }
    
}

const result=fiboNacci(10);
console.log(result);

