function calcularSuma() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function calcularResta() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function calcularMultiplicacion() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function calcularDivision() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("resultado").textContent = "No se puede dividir por 0";
    } else {
        var resultado = num1 / num2;
        document.getElementById("resultado").textContent = "Resultado: " + resultado;
    }
  }
  