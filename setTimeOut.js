function valueLog(value){
    console.log('j= ' + value);
}
for(let j=0;j<5;j++){
    setTimeout(valueLog.bind(this,j),j* 1000);
}