// // //CUMPLEAÑOS

let miEdad = 20;
// // escribir una función que aumente miEdad en 1

function aumentarEdad () {
    miEdad +=1
    console.log(miEdad)
}

// // // VIDA

let vida = 100;

// // escribir una función recibirGolpe(), que reciba un parámetro tipo number
// // y se reste al total vida

function recibirGolpe (number) {
    // const numeroFinal = vida - number
    // return numeroFinal
    vida -= number
}

// vida = recibirGolpe(10)

// console.log(vida)


// // // escribir una función curar() que regenere la vida hasta en 50, hasta un máx de 100

function curar() {
    vida += 50
    if (vida > 100) { 
        vida = 100 
    }
}

recibirGolpe(80)
curar()
curar()
curar()
curar()
curar()

console.log(vida)

// // // escribir un condicional (if) que evalúe si el jugador sigue vivo o no

function sigoVivo() {
    if (vida > 0) {
        return "Sigue vivo"
    } else {
        return "Esta Muerto"
    }
}

recibirGolpe(120)

let vivo = sigoVivo()
console.log( sigoVivo() ) 