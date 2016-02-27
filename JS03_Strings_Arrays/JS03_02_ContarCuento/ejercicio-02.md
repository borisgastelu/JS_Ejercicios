Creador de Cuentos
	Se pide crear un programa que permita crear cuentos a medida que se agregan oraciones o párrafos. Los escritores también tienen la posibilidad de revisar el estado de su cuento, leyendo la historia y cantidad de entrandas. Además, se puede eliminar ciertas partes con las que no estén conformes. De ser necesario, se puede empezar el cuento desde cero.

	HU-01
		- Deseo agregar oraciones o párrafos al cuento.

		Pruebas:
		- La función debe retornar un valor de tipo string.
		- "Oracion de prueba" debe devolver "Oracion de prueba".
		- "  Oracion de prueba  " debe devolver "Oracion de prueba".

	HU-02
		- Deseo leer el contenido del cuento.

		Pruebas
		- Si la historia no tiene ninguna entrada debe devolver "".
		- Ingresar "Primera oracion." y "Segunda oracion" debe devolver "Primera oracion. Segunda oracion".
		- Ingresar "  Primera oracion.  " y "  Segunda oracion.  " debe devolver "Primera oracion. Segunda oracion.".

	HU-03
		- Deseo saber la cantidad de entradas.

		Pruebas
		- Si la historia no tiene ninguna entrada retorna 0.
		- Ingresar "Primera oracion." y "Segunda oracion" debe devolver 2.

	HU-04
		- Deseo eliminar una entrada del cuento.

		Pruebas
		- Historia no tiene entradas y elimino la posición 2 debe retornar "",
		- Ingresar "Primera oracion." y "Segunda oracion", eliminar posición 1 debe devolver "Segunda oracion".
		- Ingresar "Primera oracion." y "Segunda oracion", eliminar sin parámetros debe devolver "Segunda oracion".

	HU-05
		- Deseo empezar el cuento de nuevo.

		Pruebas
		- Historia no tiene entradas y reiniciar el cuento devuelve "".
		- Historia tiene entradas y reinicio el cuento devuelve "".
