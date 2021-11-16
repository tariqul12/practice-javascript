function recurcive(num){
    if(num==0){
        return 1;
    }
    else{
        return num*recurcive(num-1);
    }
}
var result=recurcive(10);
console.log(result);