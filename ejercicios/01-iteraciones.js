


// Escribir un loop que haga 7 llamados a console.log
// para mostrar el siguiente triángulo
/*
i++ ||  i = i + 1
*/

// function mostrarPiramide(limite) {
//     let piramide = '#'
//     // for (let i = 0; i < limite; i++) {
//     //     piramide += '#'
//     //     console.log(piramide)
//     // }

//     for ( piramide.length;  piramide.length <= limite;  piramide += '#') {
//         console.log(piramide)
//     }

// }

// mostrarPiramide(10)


// FizzBuzz

/* 
    Escribir un programa que use console.log para mostrar números del 1 al 100.
    Con dos excepciones. Para los números divisibles por 3, imprimir "Fizz". 
    Para los números divisibles por 5 (y no por 3) imprimir "Buzz"
*/

// FizzBuzz
 

// for (let i = 1; i <= 100; i++) {

//     if ( ((i % 3) === 0) && ((i % 5) === 0) ) {
//         console.log("FizzBuzz")
//     } else if ( (i % 3) === 0 ) {
//         console.log("Fizz")
//     } else if ( (i % 5) === 0 ) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }


// Chessboard

/* 
    Escribir un programa que cree un string que represente una grilla de 8x8,
    usando carateres para separar las lineas. En cada posicion de la grilla debe
    intercalarse un caracter '#' o ' '. Con eso debería armar un tablero de ajedrez
*/

const size = 20

// const linea1 = '# # # # '
// const linea2 = ' # # # #'

for (let i = 0; i < size; i++) {


    // armar la linea

    let linea = ''

    if ( i % 2 === 0 ) {

        for (let j = 0; j < size; j++ ) {
            if ( j % 2 === 0) {
                linea += '#'
            } else {
                linea += ' '
            }
        }

    } else {

        for (let j = 0; j < size; j++ ) {
            if ( j % 2 === 0) {
                linea += ' '
            } else {
                linea += '#'
            }
        }

    }

    // mostrar la linea
    console.log(linea)

}



