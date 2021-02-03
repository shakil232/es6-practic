
class student{
    constructor(sName , sId , sRoll , sPhn){
        this.name = sName;
        this.id =sId,
        this.roll = sRoll;
        this.phone = sPhn;
        this.school = 'henten schol'
    }
}
const student1 = new student( 'Shakil', 101, 05, 01718 ) ;
const student2 = new student( 'Ahmed', 102, 02, 01685 ) ;
console.log(student1, student2);