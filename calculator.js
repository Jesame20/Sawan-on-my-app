function calculate() {
    var inputField = document.getElementById("inputField").value;
    var result = eval(inputField);
    document.getElementById("result").innerHTML = "Result: " + result;
  }
  