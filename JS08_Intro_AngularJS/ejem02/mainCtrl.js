;(function () {
	'use strict'

	// Creando el modulo de la aplicación
	angular
	  .module('app', []);

	// Usando modulo
	angular
	  .module('app')
	  .controller('MainCtrl', MainCtrl)

	MainCtrl.$inject = ['$scope']

	function MainCtrl ($scope) {
		$scope.titulo = 'Fundamentos AngularJS';
		$scope.color = 'yellow';
	}

})()
