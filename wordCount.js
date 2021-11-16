
function range(first_num,end_num){
    if(end_num-first_num ==2){
        return [first_num+1];
    }
    else{
        var list=range(first_num,end_num-1);
        list.push(end_num-1);
        return list;
    }
}
const result=range(3,10);
console.log(result);