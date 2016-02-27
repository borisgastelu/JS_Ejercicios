// Función de Orden Superior
var ifElseFn = function (condicion, trueFn, falseFn) {
	if (condicion) trueFn();
	else falseFn();
};

// Callbacks como funciones anónimas
debugger;
ifElseFn(false,
	function () {
		console.log('Es true');
	}, function () {
		console.log('Es false');
	});
