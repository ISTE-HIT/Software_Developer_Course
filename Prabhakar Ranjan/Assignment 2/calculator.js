//2. Write a function to make a calculator using switch case in Javascript

const calculator=(num1=0,num2=0,opr='+')=>{
    var ans
    switch (opr){
        case '+':
            ans = num1+num2
            break
        case '-':
            ans = num1-num2
            break
        case '*':
            ans = num1*num2
            break
        case '/':
            if (num2==0){
                ans = "denominator 0 not defined"
            }
            else{
                ans = num1/num2
            }
    }
    return ans
}
var a = prompt("Give number a");
var b = prompt("Give number b");
console.log(calculator(a,b,'+'))
console.log(calculator(a,b,'-'))
console.log(calculator(a,b,'*'))
console.log(calculator(a,b,'/'))