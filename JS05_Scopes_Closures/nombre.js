var nombrar = function (nombres) {

  var base = 'El dev master es ';

  var presentar = function (apellidos) {
    return base + ' ' + nombres + ' ' + apellidos;
  };

  return presentar;

};
