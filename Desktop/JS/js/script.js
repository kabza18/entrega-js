
function calcularPago() {
    
    var monto = 0;
    var tasaInteresAnual = 0;
    var plazoPrestamo = 0;


    monto = parseFloat(prompt("Ingrese el monto del prestamo:"));      
  
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto valido.");
        calcularPago.call(this);
     }
     
    tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interes anual (en %):")) / 100;

    if (isNaN(tasaInteresAnual) || tasaInteresAnual < 0) {
        alert("Por favor, ingrese un monto valido.");
        calcularPago.call(this);
    }

    plazoPrestamo = parseFloat(prompt("Ingrese el plazo del prestamo (en años):"));

    if (isNaN(plazoPrestamo) || plazoPrestamo <= 0) {
        alert("Por favor, ingrese un monto valido.");
        calcularPago.call(this);
    }

    // Calcular el numero de pagos (meses)
    var totalPagos = plazoPrestamo * 12;

    // Calcular la tasa de interés mensual
    var tasaInteresMensual = tasaInteresAnual / 12;

    // Formula de amortización 
    var pagoMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -totalPagos));

    alert("El pago mensual es: $" + pagoMensual.toFixed(0));
}
