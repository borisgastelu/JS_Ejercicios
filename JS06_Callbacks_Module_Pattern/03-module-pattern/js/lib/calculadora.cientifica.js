// Módulo Calculadora Científica

(function (calc) {
    'use strict';

    var PI = 3.1416;

    calc.radio = function () {
        var total = calc.getTotal();
        total *= PI;
        calc.setTotal(total);
        return total;
    };

})(calculadora || {});
