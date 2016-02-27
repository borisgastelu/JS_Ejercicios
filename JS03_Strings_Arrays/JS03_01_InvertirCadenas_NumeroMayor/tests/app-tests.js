// Suite - Describe una funcionalidad en particular
describe('User Story 1 - Invertir Cadenas', function() {

    // Probar escenarios
    it('El resultado debe ser tipo string', function() {
        var texto = app.invertirCadena('');
        expect(typeof texto).to.be.equal('string');
    });

    it('"Hola" debe ser "aloH"', function() {
        var texto = app.invertirCadena('Hola');
        expect(texto).to.be.equal('aloH');
    });

    it('"Aprendiendo JavaScript" debe ser "tpircSavaJ odneidnerpA"', function() {
        var texto = app.invertirCadena('Aprendiendo JavaScript');
        expect(texto).to.be.equal('tpircSavaJ odneidnerpA');
    });

});

describe('User Story 2 - Obtener Número Mayor', function() {

    it('[4, 5, 1, 3] debe retornar 5', function() {
        var mayor = app.numeroMayor([4, 5, 1, 3]);
        expect(mayor).to.be.equal(5);
    });

    it('[7, 1, 8, 10, 9] debe retornar 10', function() {
        var mayor = app.numeroMayor([7, 1, 8, 10, 9]);
        expect(mayor).to.be.equal(10);
    });

    it('[13, 27, 8, 26, 2] debe retornar 27', function() {
        var mayor = app.numeroMayor([13, 27, 8, 26, 2]);
        expect(mayor).to.be.equal(27);
    });

});
