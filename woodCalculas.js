var benanaPrice=12;
console.log(benanaPrice);
var myAge=21;
console.log(myAge);
var bookPrice=50;
console.log(bookPrice);
var boxPrice=400;
console.log(typeof boxPrice);
const fastName='Tariqul'
const lastName='Islam'
const fullName=fastName+' '+lastName;
console.log(fullName);
const isHot=true;
const isRich=false;
console.log(typeof isRich);
let myNameTariqul=true;
let myNameShimul=false;
console.log(myNameTariqul);

const promise="I promise I will work hard to become a programer"
console.log(promise.toUpperCase());
console.log(promise.indexOf('hard'));
console.log(promise.split(' '));

var number=20;
var number1="234";
number1=parseFloat(number1);
console.log(number1);

var  price1 =22;
var  price2  ='22.5'
price2 = + price2;
console.log(price2);

var myAge1=22;
var myAge2='11.5'
myAge2=+myAge2;
console.log(myAge1+myAge2);
var price1=50;
var price2=30;
let total=price1/price2;
total=total.toFixed(2);
console.log(total);

var price1 = 40;
var price2 = 45;
price2 ++;
console.log(price2);

var n = -5;
var absoluteNumber=Math.abs(n);
console.log(absoluteNumber);

var n = 5.4633;
var roundNumber = Math.round(n);
console.log(roundNumber);

var n = 5.5633;
var roundNumber = Math.round(n);
console.log(roundNumber);
var n= 6.4567;
var ceilNumber = Math.ceil(n);
console.log(ceilNumber);

var n = 6.4533;
var floorNumber = Math.floor(n);
console.log(floorNumber);

function getRandomNumber(){
    const random=Math.random()*10000;
    const round=Math.round(random);
    const roundString=round+'';
    if(roundString.length===4){
        return round;
    }
    else{
        return getRandomNumber();
    }
}
const result=getRandomNumber();
console.log(result);

const biskit=14;
if(biskit<10){
    console.log('I will eat biskit');
}
else{
    console.log('Cha is better');
}

function marred(job=0,money=0){
    if(job===true && money>5000){
        return 'you will got the marred';

    }
    else if(job===true){
        return "Ok I will try to matted "
    }
    else{
        return 'You are not prepare for marred';
    }
}

const sarif=marred(true,53);
console.log(sarif);

var date=new Date();
console.log(date);
var friendsAge=[14,13,53,21,22,24];
console.log(friendsAge[0]);
friendsAge[1]=15;
console.log(friendsAge[1]);
console.log(friendsAge);
friendsAge.push(122);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);
friendsAge.indexOf(22);
console.log(friendsAge.indexOf(22));

friendsAge.shift();
console.log(friendsAge);
friendsAge.unshift(100);
console.log(friendsAge);

let num=[22,12,32,21,23,24,33,25]
console.log(num.length);
for(let i=0;i<num.length;i++){
    const arrayElement=num[i];
    console.log(arrayElement);
}

const fruits=["Banana","Orange","Apple","mango"];
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Lichi");
console.log(fruits);


//         while loop
var numb=0;
while(numb<15){
    console.log(numb);
    numb++;
}

var n=[44,55,11,66,44,88,33];
for (let i = 0; i < n.length; i++) {
    const element = n[i];
    console.log(element);
}

function doubleIt(num){
    var result=num*2;
    return result;
}
var reslt=doubleIt(500);
console.log(reslt);
// doubleIt(100);

function add(num1,num2){
    var result=num1+num2;
    return result;
}
var sum=add(20,20);
console.log(sum);

