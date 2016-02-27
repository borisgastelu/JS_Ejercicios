var contador = function () {

	// Privado
	var cont = 0;

	// Métodos Privilegiados
	var contar = function () {
		cont += 1;
		return this;
	};

	var reiniciar = function () {
		cont = 0;
		return this;
	};

	var mostrar = function () {
		return cont;
	};

	// Público
	return {
		cont: contar,
		reiniciar: reiniciar,
		mostrar: mostrar
	};

};
