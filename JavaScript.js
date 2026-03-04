$("#btnOrdenar").click(function () {
  var z = parseFloat($("#z").val());
  var y = parseFloat($("#y").val());
  var x = parseFloat($("#x").val());
  var menor, medio, maior;

  //--------------------------------------------

  if (x < y && y < z) {
    menor = x;
    medio = y;
    maior = z;
  } else if (x < z && z < y) {
    menor = x;
    medio = z;
    maior = y;
  } else if (y < x && x < z) {
    menor = y;
    medio = x;
    maior = z;
  } else if (y < z && z < x) {
    menor = y;
    medio = z;
    maior = x;
  } else if (z < x && x < y) {
    menor = z;
    medio = x;
    maior = y;
  } else {
    menor = z;
    medio = y;
    maior = x;
  }

  //---------------------------------------------

  $("#txtresultado").html("A ordem crescente é:<br>" + 
      menor + ", " + medio + ", " + maior);
});
