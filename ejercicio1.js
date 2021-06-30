

// ============= rango ==========
// escribir una función RANGO que recibiendo dos números como parámetro, retorne
// un arreglo con todos los números entre esos dos parámetros

// function rango(a, b) {
// hacer
// retornar un arreglo con todos los valores entre a y b
// }

//ejemplo :
//   rango(1, 5) == retorna =>    [1, 2, 3, 4, 5]



function rango(a, b) {
    
    const listarNumeros = []
    
    if (a < b){
        for(let i = a; i<=b; i++){
            listarNumeros.push(i)
            // console.log(i)
        }
    } else {
        for(let i = a; i >= b; i--){
            listarNumeros.push(i)
            // console.log(i)
        }
    }
    return listarNumeros

}

// console.log( rango(10, 5) )  



// // ============= suma ==============

// // esribir una funcion que tome un ARREGLO por parámetro y retorne 
// // la suma (número entero) de todos los valores de ese arreglo

// function suma( arreglo ) {
//     //recibe un arreglo por parámetro
//     // retorna la suma de todos los elementos del arreglo
// }

// // ejemplo:
// //   suma( [1, 2, 3, 4] ) == retorna ==>   10

// // combinar ambas funciones
// // ejemplo:
// // suma( rango(1, 5) ) == retorna => 15

let num = [1, 2, 3, 4, 6, 7, 8, 9, 15];

function suma( numeros ) {

    let resultado = 0

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }

    return resultado
}

// console.log( suma( [4, 5, 6] ) )


console.log( suma( rango(1, 10) )  )

