// Función de Orden Superior
var operacion = function (callback, n) {
    return callback(n);
};

// Callbacks
var incrementar = function (n) {
    return n + 1;
};

var cuadrado = function (n) {
    return n * n;
};

debugger;
var increResult = operacion(incrementar, 5);
console.log(increResult);

var cuadradoResult = operacion(cuadrado, 3);
console.log(cuadradoResult);
