const calculator = (num1,num2,operator)=>{
    let res = 0;
    switch (operator){
        case '+':
            res = num1+num2;
           break;
           case '-':
            res = num1-num2;
           break;
           case '/':
            res = num1/num2;
           break;
           case '*':
            res = num1*num2;
           break;

    }
    return res;
}


let num1 = prompt("Enter the first number:");
num1 = Number(num1);
let num2 = prompt("Enter the second number:");
num2 = Number(num2);
let operator = prompt("Enter the operator -> 1) '+'for addition  2)'-'for subtraction  3)'/'for division   4) '*'for multiplication");

let res = calculator(num1,num2,operator);
console.log(res);