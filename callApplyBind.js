// let p1={
//     firstName:"John",
//     lastName:"Smith"
// }
// let p2={
//     firstName:"ann",
//     lastName:"brown"
// }
// function sayWelcome(greeting) {
//     console.log(greeting+" "+this.firstName+" "+this.lastName)
// }
// sayWelcome.call(p1,"welcome");
// sayWelcome.call(p2,"welcome");

// let p1={
//     firstName:"John",
//     lastName:"Smith"
// }
// let p2={
//     firstName:"ann",
//     lastName:"brown"
// }
// function sayWelcome(greeting){
//     console.log(greeting+" "+this.firstName+" "+this.lastName);
// }
// sayWelcome.apply(p1,['welcome']);
// sayWelcome.apply(p2,['welcome']);


let p1={
    firstName:"John",
    lastName:"Smith"
}
let p2={
    firstName:"ann",
    lastName:"brown"
}
function sayWelcome(greeting){
    console.log('Welcome ' + this.firstName + ' ' + this.lastName)
}
let sayWelcomeJohn=sayWelcome.bind(p1);
let sayWelcomeAnn = sayWelcome.bind(p2);
sayWelcomeJohn();
sayWelcomeAnn();