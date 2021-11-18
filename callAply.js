const normalName = {
    firstName:"Rohim",
    lastName:"Uddin",
    salary:15000,
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary-amount;
        return this.salary;
    }

}
// normalName.getFullName();

normalName.chargeBill(150);
normalName.chargeBill(3000);
console.log(normalName.salary);

