var APP = (APP || {});
APP.msg = (APP.msg || {});

(function (msg) {
	'use strict';

	msg.popup = function (total) {
		alert('El resultado es: ' + total);
	};

	msg.log = function (total) {
		console.warn('Total: ' + total);
	};

	msg.display = function (total) {
		var output = document.querySelector('#output');
		output.innerHTML = '<h1>' + total + '</h1>';
	};

})(APP.msg);
