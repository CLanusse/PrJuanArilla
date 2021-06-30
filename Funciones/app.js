// SCOPE - SALUDAR


let saludo = '¡Hola Mundo!'

function saludar() {
    let saludo = '¡Hola Coders!'
    console.log(saludo)
    saludarDeNuevo(saludo)
}

function saludarDeNuevo(mensaje) {
    console.log(mensaje)
}

// saludar()



// SUMA - RANGO

function sum(a, b) {
   return a + b
}

let resultado = sum(5, 50)

// console.log(resultado)


// Sumar un rango: inicio - final.
// Sume todos los valores entre el incio y el final

// 1 - 5
// 1 + 2 + 3 + 4 + 5 = 15


function rango(inicio, final) {

    let total = 0;

    if (inicio <= final) {
        for (inicio; inicio <= final; inicio++) {
            console.log(inicio)
            total += inicio
        }
    } else {
        // for (final; final <= inicio; final++) {
        //     total += final
        // }
        for (inicio; inicio >=final; inicio--) {
            console.log(inicio)
            total += inicio
        }
    }

    return total
}

// console.log(rango(1, 10))


// sumar arrays

const precios = [1000, 5200, 1503, 650]
const precios2 = [1000, 5200, 1503, 650, 2323, 4443, 1123]

function sumarPrecios(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }

    return total
}
console.log(sumarPrecios(precios))
console.log(sumarPrecios(precios2))
console.log(sumarPrecios([10, 30, 4]))





// PRESTAMO

// Pasar el nombre del banco, monto:
// funcion prestamo("Macro", 100000) = 130000
// funcion prestamo("Santander", 100000) = 120000

// arrow function
const calcularPrestamo = (banco, monto) => {

    let interes = 0;

    // if (banco === 'Santander') {
    //     interes = 1.10 
    // } else if (banco === 'Macro') {
    //     interes = 1.23
    // } else if (banco === 'Provincia') {
    //     interes = 1.68
    // } else {
    //     return 'Banco inválido'
    // }

    switch(banco) {
        case 'Santander':
            interes = 1.10
            break
        case 'Macro':
            interes = 1.23
            break
        case 'Provincia':
            interes = 1.68
            break
        case 'Galicia':
            interes = 2.14
            break 
        case 'Nacion':
            interes = 2.23
            break 
        case 'Francés':
            interes = 2.50
            break 
        default:
            return 'Banco inválido'
    }

    return monto * interes
}


let bancoUsuario = prompt('Ingrese banco')
let montoUsuario = parseInt(prompt('ingrese monto'))

let prestamo = calcularPrestamo(bancoUsuario, montoUsuario)

console.log(prestamo)