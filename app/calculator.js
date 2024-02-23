// Function to append a value to the input field
function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  // Function to clear the input field
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  // Function to perform the calculation
  function calculate() {
    let result = document.getElementById('result').value;
    try {
        // Using eval() function to evaluate the expression
        document.getElementById('result').value = eval(result);
    } catch (error) {
        // Handling any errors that may occur during calculation
        document.getElementById('result').value = 'Error';
    }
  }
  