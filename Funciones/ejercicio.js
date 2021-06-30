// SCOPE - SALUDAR


let saludo = '¡Hola Mundo!'

function saludar() {

    let saludo = 'Hola Juan'  
    console.log( saludo )
    saludar2(saludo)
}

function saludar2(mensaje) {
    console.log(mensaje)
}

// saludar()

// console.log(saludo)

function suma(a, b) {
    return a + b
}

// console.log( suma(1, 5, 55, 80, 99, false, null, "hola", 5) )



// funcion para calcualr intereses
// macro, santander, galicia
function calcularInteres(banco, monto) {

    // if (banco === "Macro") {
    //     return monto * 1.2
    // } else if (banco === "Santander") {
    //     return monto *1.3
    // } else if (banco === "Galicia") {
    //     return monto * 1.5
    // } else {
    //     return "No existe ese banco"
    // }

    switch(banco) {

        case "Macro":
            return monto * 1.2;
 
        case "Santander":
            return monto * 1.3

        case "Galicia":
            return monto * 1.5

        default:
            return "No existe ese banco"
    }


}

console.log( calcularInteres("Santander", 10000) )  