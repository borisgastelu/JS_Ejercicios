// Función de Orden Superior
var ifElseFn = function (condicion, trueFn, falseFn) {
	if (condicion) trueFn();
	else falseFn();
};

// Callbacks como Expresiones de Función
var trueFn = function () {
	console.log('Es true');
};

var falseFn = function () {
	console.log('Es false');
};

debugger;
ifElseFn(false, trueFn, falseFn);
