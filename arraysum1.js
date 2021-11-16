function reverseString(str){
    var reverse="";
    for(var i=0;i<str.length;i++){
        var char=str[i];
        reverse=char+reverse;
    }
    return reverse;
}
var statment="hello alien bhai brother how are you?";
const alien=reverseString(statment);
console.log(alien);