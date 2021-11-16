var today=new Date();
var day =today.getDay();
var daylist=['sunday','monday','tuesday','wednesday','thursday','friday','sunday'];
console.log("today is:"+daylist[day]+'.');
var hour=today.getHours();
var minute=today.getMinutes();
var seconds=today.getSeconds();
var prepand=(hour>=12)? "PM":"AM";
hour=(hour>=12)? hour-12:hour;
if(hour===0&&prepand==="PM"){
    if(minute===0&&seconds===0){
        hour=12;
        prepand="Noon";
    }
    else{
        hour=12;
        prepand="PM"
    }

}
if(hour===0&&prepand==="AM"){
    if(minute===0&&seconds===0){
        hour=12;
        prepand="midnight";
    }
    else{
        hour=12;
        prepand="AM";
    }
}
console.log("Current Time:"+hour +" " +prepand+":"+minute+":"+seconds)