// Módulo base - Augmentation

var APP = (APP || {});
APP.calculadora = (APP.calculadora || {});

(function (calc) {
    'use strict';

    // Privado
    var _total = 0;

    // Público
    calc.getTotal = function () {
        return _total;
    };

    calc.setTotal = function (val) {
        _total = val;
    };

    calc.reiniciar = function () {
        _total = 0;
        return calc;
    };

    calc.mostrar = function (callback) {
        callback(_total);
        return calc;
    };

})(APP.calculadora);
