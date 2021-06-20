function calulate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  const operator = document.getElementById("operator").value;
  const result = document.getElementById("result");

  num1 = num1 ? parseInt(num1) : 0;
  num2 = num2 ? parseInt(num2) : 0;

  switch (operator) {
    case "+":
      result.value = num1 + num2;
      break;
    case "-":
      result.value = num1 - num2;
      break;
    case "*":
      result.value = num1 * num2;
      break;
    case "/":
      result.value = num1 / num2;
      break;
    default:
      break;
  }
}
