function findSumNumbers(numbers, target){
  var res = new Object(); // Objeto en donde almacenará el resultado
  var value;              // Variable temporal el indexde un valor
  /*  
    Creacion de un objecto cuyos indices(keys) sean los valores del arreglo 
    y los valores son la posicion que ocupan 
  */
  var pseudoHash = numbers.reduce(function(collector, c, i) {
    collector[c] = i;
    return collector
  }, {});

  // Recorrido del arreglo buscando el indice del pseudohash que cumpla con la resta
  for(i=0; i < numbers.length; i++){
    value = pseudoHash[target - numbers[i]]
    if((typeof value !== 'undefined') && value !== i){
      res = { index1: i, index2: value };
      return res;
    }
  }

  // Si no existen un par de numeros que sumen el target retorno nulo
  return null;
}

/*
NOTA: En el enunciado dice: "El resultado debe indicar la posición del array"
pero el ejemplo retorna "Output: index1=1, index2=2" teniendo en cuenta que 
los arreglo comienzan con index 0, el resultado deberia ser index1=0, index2=1,
en el caso de que se quiera la posición visual y no la de referencia habría
que sumar 1 a cada index.
*/

// Exportar la función para usarla en consola.
module.exports =  findSumNumbers;