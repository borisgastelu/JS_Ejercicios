// Suite - Funcionalidades de la aplicación
describe('Invertir Cadenas', function() {

    var app = cuentaCuento();

    it('La función debe retornar un valor de tipo string', function() {
        var texto = app.invertir();
        expect(typeof texto).to.be.equal('string');
    });

    it('"Hola" debe ser "aloH"', function() {
        var texto = app.invertir("Hola");
        expect(texto).to.be.equal('aloH');
    });

    it('"Aprendiendo JavaScript" debe ser "tpircSavaJ odneidnerpA"', function() {
        var texto = app.invertir("Aprendiendo JavaScript");
        expect(texto).to.be.equal("tpircSavaJ odneidnerpA");
    });

});

describe('Contar letras o palabras', function() {

    var app = cuentaCuento();

    it('La función debe retornar un valor de tipo number', function() {
        var cant = app.contar();
        expect(typeof cant).to.be.equal('number');
    });

    it('"Hola" debe retornar 4', function() {
        var cant = app.contar("Hola");
        expect(cant).to.be.equal(4);
    });

    it('"Aprendiendo JavaScript" debe retornar 2', function() {
        var cant = app.contar("Aprendiendo JavaScript");
        expect(cant).to.be.equal(2);
    });

});

describe('Agregar palabras o parrafos', function() {

    var app = cuentaCuento();

    it('La función debe retornar un valor de tipo string.', function() {
        var texto = app.agregar('');
        expect(typeof texto).to.be.equal('string');
    });

    it('"Oracion de prueba" debe devolver "Oracion de prueba"', function() {
        var texto = app.agregar("Oracion de prueba");
        expect(texto).to.be.equal("Oracion de prueba");
    });

    it('"  Oracion de prueba  " debe devolver "Oracion de prueba"', function() {
        var texto = app.agregar("  Oracion de prueba  ");
        expect(texto).to.be.equal("Oracion de prueba");
    });

});
