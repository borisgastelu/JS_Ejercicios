// Librería para Crear Cuentos
//  Encapsular estado interno.
//  Almacenar estados distintos para cada variable.

var cuentaCuento = function () {

    // Miembros Privados
    var historia = [];

    var agregar = function (cadena) {
        var esAgregado = false;
        cadena = cadena.trim();

        if (cadena) {
            historia.push(cadena);
            esAgregado = true;
        }

        return esAgregado ? cadena : '';
    };

    var invertir = function (cadena) {
        var caracteres = cadena ? cadena.split('') : [];
        return caracteres.reverse().join('');
    };

    var contar = function (cadena) {
        if (cadena) {
            var cant = cadena.split(' ').length;
            var esOracion = (cant > 1) ? true : false;

            if (esOracion === true) {
                return cant;
            } else {
                return cadena.split('').length;
            }
        }

        return 0;
    };

    var leer = function () {
        return historia.join('. ').trim();
    };

    // API - Miembros públicos
    return {
        agregar: agregar,
        invertir: invertir,
        contar: contar,
        leer: leer
    };

};

var historiaDeMiVida = cuentaCuento();
historiaDeMiVida.agregar("...Programe en C++, C# y Java");
historiaDeMiVida.agregar("Ninguna me gusto");
historiaDeMiVida.agregar("Conoci JavaScript");
historiaDeMiVida.agregar("Y fui muy feliz. Yeeee!!!");

var theWalkingDead = cuentaCuento();
theWalkingDead.agregar("...Un muertito.");
theWalkingDead.agregar("Más otro muertito.");
theWalkingDead.agregar("Se comieron a todos los vivitos. jeje");

historiaDeMiVida.leer();
theWalkingDead.leer();
