'use strict'

// const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /* Caso base */
  if(array.length <= 1) return array;
  /* tomo pivote */
  var pivote = array[0];
  /* Definimos izq y der */
  var izq = [];
  var der = [];

  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivote){
      izq.push(array[i])
    }else{
      der.push(array[i])
    }
  }
  /* recursión */
  return quickSort(izq).concat(pivote).concat(quickSort(der))
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /* Caso base */
  if(array.length === 1) return array;
  
  let medio = Math.floor(array.length / 2);
  let izq = array.slice(0, medio);
  let der = array.slice(medio);
  
  return merge(mergeSort(izq), mergeSort(der))
}

function merge(arr1, arr2){
  let izq = 0;
  let der = 0;
  let result = [];

  while(izq < arr1.length && der < arr2.length){
    /* comparamos y pusheamos a result */
    if(arr1[izq] < arr2[der]){
      result.push(arr1[izq]);
      izq = izq + 1;
    }else{
      result.push(arr2[der])
      der = der + 1
    }
  }
  return result.concat(arr1.slice(izq)).concat(arr2.slice(der))
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
