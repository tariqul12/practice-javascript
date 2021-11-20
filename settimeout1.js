function doSomething(){
    console.log(3333);
}
console.log(2222);
setTimeout(function (){
    console.log('lazy and waiting')
},5000);
setTimeout(()=>{
    console.log('see you later')
},4000)
console.log(4444);
console.log(5555);
setInterval(function(){
    console.log('doing it again')
},3000);