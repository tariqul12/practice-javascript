var marks=[12,23,42,65,83,99,55,33,63,45,62]
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var element=marks[i];
    if(element>max){
        max=element;
    }
}
console.log("heighest number of array:",max);