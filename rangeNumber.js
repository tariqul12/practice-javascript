function range(start_num,end_num){
    if(end_num-start_num==2){
        return [start_num+1];
    }
    var list=range(start_num,end_num-1);
    list.push(end_num-1);
    return list;
}
console.log(range(40,70));