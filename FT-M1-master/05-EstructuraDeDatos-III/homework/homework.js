'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {
  /* Caso base (Nodo hoja) */
  if(!this.left && !this.right) return 1;
  /* Casos con un solo hijo */
  if(!this.left) return 1 + this.right.size();
  if(!this.right) return 1 + this.left.size();
  /* nodo que tenga ambos hijos */
  return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.insert = function(value) {
  /* comparamos el valor */
  if(value > this.value){
    /* Me voy a la derecha
       si no hay nada a la derecha */
    if(this.right === null){
      /* lo agrego */
      this.right = new BinarySearchTree(value)
    }else{
      /* Si hay algo en la derecha */
      this.right.insert(value)
    }
  }else{
    /* me voy a la izquierda */
    if(this.left === null){
      /* lo agrego */
      this.left = new BinarySearchTree(value)
    }else{
      /* Si hay algo en la izquierda */
      this.left.insert(value)
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if(value === this.value) return true
  /* si es más grande me fijo en el de la derecha */
  if(value > this.value){
    /* si no tengo nada */
    if(this.right === null) return false
    /* si tengo derecha */
    return this.right.contains(value) // ->return true
  }else{
    /* me fijo en el de la izquierda */
    if(this.left === null) return false
    return this.left.contains(value)
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if(order === 'in-order' || !order){
    /* primero va nodo a la izquierda, despues nodo y despues derecha */
    this.left && this.left.depthFirstForEach(cb, order)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, order)
  }else if(order === 'pre-order'){
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
  }else{
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr) {
  if(!arr){
    var arr = []
  }

  cb(this.value) // 

  this.left && arr.push(this.left);
  this.right && arr.push(this.right);

  arr.length && arr.shift().breadthFirstForEach(cb, arr)
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
