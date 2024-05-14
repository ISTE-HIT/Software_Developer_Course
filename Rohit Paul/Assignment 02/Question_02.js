//calculator using switch case

var r = 0;
const op = prompt("Enter the operation you want to perform :");
var n1 = parseInt(prompt("Enter the 1st number :"));
var n2 = parseInt(prompt("Enter 2nd number :"));

switch (op) {
  case "+":
    r = n1 + n2;
    console.log("Result = " + r);
    break;

  case "-":
    r = n1 - n2;
    console.log("Result = " + r);
    break;

  case "*":
    r = n1 * n2;
    console.log("Result = " + r);
    break;

  case "/":
    r = n1 / n2;
    console.log("Result = " + r);
    break;

  default:
    console.log("Enter a valid operator");
    break;
}
