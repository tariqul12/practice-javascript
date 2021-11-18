const normalName = {
    firstName:"Rohim",
    lastName:"Uddin",
    salary:15000,
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary-amount-tips-tax;
        return this.salary;
    }

}
// normalName.getFullName();

const heroPerson = {
    firstName: "Hero",
    lastName:"Balam",
    salary:25000,

}
const friendlyPerson = {
    firstName: "Hero",
    lastName:"Kalam",
    salary:30000,
}
// const heroChargeBill=normalName.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalName.salary);

// const friendChargeBill =normalName.chargeBill.bind(friendlyPerson);
// friendChargeBill(3000);
// console.log(friendlyPerson.salary);


//            call
normalName.chargeBill.call(heroPerson,9000,100,10);
// normalName.chargeBill.call(heroPerson,300,30);
console.log(heroPerson.salary);
normalName.chargeBill.call(friendlyPerson,5000,300,30);
console.log(friendlyPerson.salary);
console.log(normalName.salary);



//                  apply
normalName.chargeBill.apply(heroPerson,[4000,50,40]);
console.log(heroPerson.salary);

