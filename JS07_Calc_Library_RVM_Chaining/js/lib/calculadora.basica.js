// Módulo Calculadora Básica

(function (calc) {
    'use strict';

    calc.sumar = function (val) {
        var total = calc.getTotal();
        total += val;
        calc.setTotal(total);
        return calc;
    };

    calc.restar = function (val) {
        var total = calc.getTotal();
        total -= val;
        calc.setTotal(total);
        return calc;
    };

})(APP.calculadora || {});
