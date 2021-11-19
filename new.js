class parson{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroParson = new parson('hero','Balam',20000);
console.log(heroParson);
const friendlyParson = new parson('hero','kalam',25000);
console.log(friendlyParson);

// function parsonOld(firstName,lastName,salary){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldParson=new parsonOld('grand','roni',1200);
console.log(oldParson);