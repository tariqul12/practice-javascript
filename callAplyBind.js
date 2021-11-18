const normalName = {
    firstName:"Rohim",
    lastName:"Uddin",
    salary:15000,
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary-amount;
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
const heroChargeBill=normalName.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalName.salary);

const friendChargeBill =normalName.chargeBill.bind(friendlyPerson);
friendChargeBill(3000);
console.log(friendlyPerson.salary);