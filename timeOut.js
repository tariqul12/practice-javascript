function myFunc(){
    console.log("Hello World");
}
var myTimeout= setTimeout(myFunc,3000);
var x = 10;
var myInterval = setInterval(()=>{
    x +=10;
    console.log(x);
},1000);