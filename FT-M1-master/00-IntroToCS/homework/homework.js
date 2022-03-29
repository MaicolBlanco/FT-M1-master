'use strict'

function BinarioADecimal(num) {
  var resultado = 0
  /* Primero tenemos que convertir un número a strig y éste string a un array
    ya luego con el metodo reverse lo invertimos, luego pasamos este array a un string  */
  var binarioInvertido = num.toString().split("").reverse().join("");
  for (let i = 0; i < binarioInvertido.length; i++) {
    var contador = (2**[i]) * (binarioInvertido[i])
    var resultado = resultado + contador     
  }
  return resultado
}


function DecimalABinario(num) {
  var resultado = ""
  var listResultado = []
  while (num != 0) {
    var modulo = num % 2
    var cociente = Math.floor(num / 2) 
    listResultado.push(modulo)
    num = cociente
  }
  resultado = listResultado.reverse().join("")
  return resultado
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}