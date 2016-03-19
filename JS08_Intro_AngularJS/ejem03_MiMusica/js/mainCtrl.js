;(function () {
	'use strict';

	angular
		.module('app', []);

	angular
		.module('app')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope'];

	function MainCtrl($scope) {
		$scope.esLista = false;
		$scope.canciones = [
			{ titulo: 'El Aguacero', autor: 'El Gran Combo', tipo: 'Salsa' }
         ];

		$scope.agregar = function () {
			var cancion = {
				titulo: $scope.titulo,
				autor: $scope.autor,
				tipo: $scope.tipo
			};

			$scope.canciones.push(cancion);

			$scope.titulo = '';
			$scope.autor = '';
			$scope.tipo = '';
		}

		$scope.cambiarVista = function () {
			$scope.esLista = !$scope.esLista;
		}

	}

})()
