const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
function ratioAndFactorial(num1,num2,num){
    const ratio = ratioOfTwoNumbers(num1,num2);
    const factorial = factorialOfNumber(num);
    return {ratio,factorial};
} 
module.exports=ratioAndFactorial