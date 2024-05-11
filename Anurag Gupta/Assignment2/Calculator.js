//  WAP to make a calculator using function and switch case

const calculate = (num1, num2, oper) => {
    switch (oper) {
        case '+':
            return num1 + num2
            break
        case '-':
            return num1 - num2
            break
        case '*':
            return num1 * num2
            break
        case '/':
            if (num2==0){
                return "Undefined"
            }
            else{
                return num1/num2
            }
            break
        default :
            return "Not a valid operation"
    }
}
var num1 = 76
var num2 = 38
console.log(calculate(num1,num2,'+'))
console.log(calculate(num1,num2,'-'))
console.log(calculate(num1,num2,'*'))
console.log(calculate(num1,num2,'/'))