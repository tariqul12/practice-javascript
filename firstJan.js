console.log('------')
for(var year=2014;year<=2050;year++){
    var d=new Date(year,0,1);
    // console.log(d)
    if(d.getDay()===0){
        console.log("1st january is being a sunday "+year);
        // console.log(d.getDay())
    }
}
console.log('---------');