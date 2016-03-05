// Módulo Calculadora Científica

(function (calc) {
    'use strict';

    const PI = 3.1416;

    calc.radio = function () {
        var total = calc.getTotal();
        total *= PI;
        calc.setTotal(total);
        return calc;
    };

})(APP.calculadora || {});
