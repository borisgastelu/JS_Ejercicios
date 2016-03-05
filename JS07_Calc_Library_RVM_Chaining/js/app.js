// App Main
(function () {
	'use strict';

	// Locales - Privadas
	var calc = APP.calculadora;
	var msg = APP.msg;

	calc
		.sumar(5)
		.restar(1)
		.mostrar(msg.popup)
		.radio()
		.mostrar(msg.log)
		.restar(2)
		.mostrar(msg.display);

})();
