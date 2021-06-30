// ===== revertir un arreglo ======
// escribir una función revertirArreglo que reciba un array por parámetro
// y retorne un arreglo distinto con todos los elementos en orden inverso

// function revertirArreglo( arreglo ) {
    // debe retornar un arreglo con sus elementos en orden inverso
    // pensar en métodos .push o .unshift para agregar elementos a otro arreglo
// }



function desordenarNumeros(arreglo) {
    
    const arrayInvertido = []
    // for (let i = arreglo.length - 1; i >= 0; i--){
    //        arrayInvertido.push(arreglo[i]) 
    // }

    for (let i = 0; i < arreglo.length; i++) {
        arrayInvertido.unshift(arreglo[i])
    } 

    return arrayInvertido
    
}


console.log( desordenarNumeros( [1,2,3,4,5] ) )


// ejemplo:
// revertirArreglo( [1, 2, 3, 4] ) === retorna ==> [4, 3, 2, 1]