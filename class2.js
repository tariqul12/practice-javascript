class Parent {
    constructor(){
        this.fatherName="schwerznegger";
    }
}



class Child extends Parent {
    constructor(name){
        super();
        this.name=name;

    }
    getFullName(){
        this.fatherName+" "+this.name;
    }
}
const baby= new Child("arnold");
const baby2= new Child("tom");
console.log(baby.getFullName());
console.log(baby2);

