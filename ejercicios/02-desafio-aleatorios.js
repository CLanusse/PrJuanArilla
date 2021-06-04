/**
 * Crear un proyecto en nodejs que genere 10000 numeros aleatorios en el
 * rango de 1 a 20.
 * Crear un objeto cuyas claves sean los numeros salidos y el valor asociado sea
 * la cantidad de veces que salio dicho numero.
 * Representar por consola los resultados.
 */

let valores = {};

function obtenerRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

for (let i = 1; i <= 10000; i++) {

    let num = obtenerRandom(1, 5)

    if (valores[num]) {
        valores[num] += 1
    } else {
        valores[num] = 1
    }

}

console.log(valores)




/* 
let valores = {
    '1': 800,
    '2': 900,
    '3': 1200
}

*/







// const usuario = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 40
// }

// usuario['edad'] = 20
// console.log( usuario )

// usuario['casado'] = false 

// console.log(usuario)
