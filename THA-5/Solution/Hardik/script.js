function calcHandler(e) {
  var num1 = parseInt(document.getElementById("first-num").value);
  var num2 = parseInt(document.getElementById("second-num").value);
  if (e == "+") alert(`${num1} + ${num2} = ${num1 + num2}`);
  if (e == "-") alert(`${num1} - ${num2} = ${num1 - num2}`);
  if (e == "*") alert(`${num1} * ${num2} = ${num1 * num2}`);
  if (e == "/") {
    if (num2 === 0) alert("Cannot divide a number by 0");
    else alert(`${num1}/${num2} = ${(num1 / num2).toFixed(2)}`);
  }
  document.getElementById("first-num").value = "";
  document.getElementById("second-num").value = "";
  event.preventDefault();
}
