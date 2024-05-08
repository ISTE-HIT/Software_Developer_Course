//  Write a function to make a calculator using switch case

const calculator=(num1=0,num2=0,oper='+')=>{
    var ans
    switch (oper){
        case '+':
            ans = num1+num2
            break
        case '-':
            ans = num1+num2
            break
        case '*':
            ans = num1*num2
            break
        case '/':
            if (num2==0){
                ans = "Cannot be divisible by 0"
            }
            else{
                ans = num1/num2
            }
    }
    return ans
}
var a = 5
var b = 6
console.log(calculator(a,b,'+'))
console.log(calculator(a,b,'-'))
console.log(calculator(a,b,'*'))
console.log(calculator(a,b,'/'))