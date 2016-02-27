const GASTO_LIMITE = 200;
const IMPUESTO = 0.18;

var balance = 300;
var monto = 0;

function calcularImpuesto(monto) {
    return monto * IMPUESTO;
}

function formatearMonto(monto) {
    return 'S/.' + monto.toFixed(2);
}

while (monto < balance) {
    monto += parseInt(prompt('Precio del celular'));
    if (monto < GASTO_LIMITE) {
        monto += parseInt(prompt('Precio del accesorio'));
    }
}

monto += calcularImpuesto(monto);

console.log('Monto: ' + formatearMonto(monto));

if (monto > balance) {
    console.log('No puede pagar el monto. :(');
}
