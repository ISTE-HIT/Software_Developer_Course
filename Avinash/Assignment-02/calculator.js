

const calculate = (num1, num2, opr) => {
    switch (opr) {
        case '+':
            return parseFloat(num1) + parseFloat(num2)
            
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
var num1=prompt("Enter 1st Number:");
var num2=prompt("Enter 2nd Number:");

console.log("Addition: ",calculate(num1,num2,'+'))
console.log("Substraction:",calculate(num1,num2,'-'))
console.log("Multiplication:",calculate(num1,num2,'*'))
console.log("Division:",calculate(num1,num2,'/'))

