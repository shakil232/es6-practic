class Prents {
    constructor (){
        this.FatherName = 'Abdul Hanna'
    }
}

class   Child extends Prents{
    constructor(name){
        super();
        this.name= name;
    };
    getFullName(){
        return this.name + " " +this.FatherName 
    }
}
const baby = new Child('jobaer');
const baby2 = new Child('maidul');
console.log (baby.getFullName());
console.log (baby2);