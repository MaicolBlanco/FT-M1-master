'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(valor){
  var newNode = new Node(valor);
  var current = this.head;
  /* Lista vacia */
  if(!current){
    this.head = newNode;
    return
  }
  while (current.next) {
    current = current.next
  }
  current.next = newNode
}
LinkedList.prototype.remove = function(){
  var current = this.head
  /* Lista vacia */
  if (!current) return null;
  /* Si tiene un solo Nodo */
  if(current.next === null){
    this.head = null;
    return current.value;
  }
  /* Si tiene más de un valor */
  while(current.next.next){
    current = current.next
  }
  /* Se guarda */
  var aux = current.next;
  /* Se borra */
  current.next = null;
  return aux.value;
}
LinkedList.prototype.search = function(valor){
  var current = this.head;
  /* Si esta vacia */
  if(!current) return null;
  /* Si no esta vacia */
  while(current){
    /* Si recibo una función */
    if(typeof valor === "function"){
      /* Ejecutar la función con el valor del nodo
        Si me DA true es el valor que buscaba */
      if(valor(current.value)){
        return current.value;
      }
    }
    if(current.value === valor) return current.value;
    current = current.next
  }
  return null
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw new TypeError('Keys must be strings')
  var index = this.hash(key)
  if(!this.buckets[index]){
    this.buckets[index] = {}
  }
  this.buckets[index][key] = value
}
HashTable.prototype.get = function(key){
  var index = this.hash(key)
  return this.buckets[index][key]
}
HashTable.prototype.hasKey = function(key){
  var index = this.hash(key)
  return this.buckets[index].hasOwnProperty(key)
}
HashTable.prototype.hash = function(valor){
  var contador = 0
  for (let i = 0; i < valor.length; i++) {
    contador = contador + valor.charCodeAt(i)  
  }
  return contador % this.numBuckets;
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
