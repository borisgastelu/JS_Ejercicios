var app = {};

app.invertirCadena = function (cadena) {
    return cadena.split('').reverse().join('');
};

app.numeroMayor = function (arr) {
    var ordenada = arr.sort(function (a, b) {
        return a - b;
    });
    return ordenada.pop();
};
