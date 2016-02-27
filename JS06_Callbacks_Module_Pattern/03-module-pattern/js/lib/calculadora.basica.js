// Módulo Calculadora Básica

(function (calc) {
    'use strict';

    calc.sumar = function (val) {
        var total = calc.getTotal();
        total += val;
        calc.setTotal(total);
        return total;
    };

})(calculadora || {});
