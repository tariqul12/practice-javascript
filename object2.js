var student1={id:2001,phone:2123,name:'Tariqul'};
var student2={id:302,phone:2222,name:'Abir'};
console.log(student1);
var phoneNo=student2.phone;
console.log(phoneNo);
var studentName=student1["name"];
console.log(studentName);
student2.id=1010;
console.log(student2.id);
student1.password=2020;
console.log(student1);
student1['password']=2121;
console.log(student1);

var name='jabe';
if(name.length>4){
    name="jobo";
}
console.log(name);


function isLeapYear(year){
    const reminder=year%4;
    if(reminder===0){
        return "This year is a leapyear"
    }
    return 'This year is not a leapyear'
}
const result=isLeapYear(3304);
console.log(result);

