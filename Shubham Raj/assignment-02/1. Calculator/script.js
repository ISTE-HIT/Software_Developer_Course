let result;

function calculate() {
  let a = Number(document.querySelector(".a").value);
  let b = Number(document.querySelector(".b").value);
  let op = document.querySelector(".op").value;

  console.log(op);

  switch (op) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      if (b != 0) {
        result = a / b;
      }

      else{
        result = "invalid";
      }
      break;

      case "%":
      result = a % b;
      break;

    default:
      alert("Enter a valid operation !!!!!");
      break;
  }

  console.log(result);
  document.querySelector("#out").innerHTML = result;
}
