
// function dubleIt (num){
//     return num *2;
// }

// const dubleIt = function barayde(num){
//       return num *2;
// }

const dubleIt = num => num *2;
const result = dubleIt(10);
console.log(result);

const addIt =(num1,num2) => num1 + num2 ;
const result2 = addIt(40,60);
console.log(result2);

const Math =(num1,num2) => {
    const sum = num1 + num2 ;
    const duble = sum *2 ;
    const result = duble / 4;
    return result;
}
const result3= Math(70,50);
console.log(result3);