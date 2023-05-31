function calculadora(array) {
    var resultado = 0;
    for (var i = 0; i < array.length; i++) {
        resultado += array[i];
    }
    
    return resultado; 
}

var operacion = [1, 2, 3];

console.log(calculadora(operacion));
