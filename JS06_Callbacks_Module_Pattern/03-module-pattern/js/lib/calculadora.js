// Módulo base

var calculadora = calculadora || {};

(function (calc) {
    'use strict';

    var total = 0;

    calc.getTotal = function () {
        return total;
    };

    calc.setTotal = function (val) {
        total = val;
    };

    calc.reiniciar = function () {
        total = 0;
        return 0;
    };

})(calculadora);
