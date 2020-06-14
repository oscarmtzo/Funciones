function primera (){
  console.log('hola mundo')
  
}

primera()

function suma() {
  return 2 + 3
}
let resultado = suma()
console.log(resultado)

function sumaPro (uno, dos) {
  return uno + dos
}
console.log(sumaPro(45,74))


// Ejercicio
/*
Crea una función addNumbers que tome 2 parámetros y devuelva la suma de esos parámetros.
Crea una función substractNumbers que tome 2 parámetros y devuelva la diferencia de esos parámetros.
Crea una función multiplyNumbers que tome 2 parámetros y devuelva el producto de esos parámetros.
Crea una función divideNumbers que tome 2 parámetros y devuelva el cociente de esos parámetros.
Crea una calculadora de funciones que tome 3 parámetros. Los primeros dos parámetros son los números. El tercer parámetro, llamado operación, es la operación que ejecutará.
Si la operación es “suma”, debe ejecutar la función addNumbers.
Si la operación es “resta”, debe ejecutar la función substractNumbers.
Si la operación es “multiplicación”, debe ejecutar la función multiplyNumbers.
Si la operación es “división”, debe ejecutar la función divideNumbers
*/

let addNumbers = function(a,b){
  return a+b
}

let substractNumbers = function(a,b){
  return a-b
}

let multiplyNumbers = function(a,b){
  return a*b
}

let divideNumbers = (a,b) => a/b

let calculadora = function(a,b, operacion){
  if (operacion == 'suma'){
    return addNumbers(a,b)
  } else if ( operacion == 'resta'){
    return substractNumbers(a,b)
  } else if ( operacion == 'multiplicacion'){
    return multiplyNumbers(a,b)
  } else if ( operacion == 'division'){
    return divideNumbers(a,b)
  } 
}
calculadora(2,4,'division')