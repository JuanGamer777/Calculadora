// Operaciones definidas en formato JSON
const operations = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => b !== 0 ? a / b : 'Error: División por cero'
};//JSON de aqui arriba


function calculate() {
    const operation = document.getElementById('operation').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
//JS Object

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Por favor ingresa ambos números.';
        return;
    }

    // Llamada a la operación seleccionada y actualización del resultado
    const result = operations[operation](num1, num2);
    document.getElementById('result').textContent = `Resultado: ${result}`;
}
//JS Callback