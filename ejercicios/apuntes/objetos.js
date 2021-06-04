

// const mascota = {
//     nombre: "Pepe",
//     edad: 10,
//     amigos: ['Juan', 'Jorge'],
//     raza: {
//         tipo: "Galgo",
//         cruza: false
//     }
// }


// funcion constructora

// function Mascota(nombre, edad, tipo) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.tipo = tipo

//     this.pedirNombre = () => {
//         return this.nombre
//     }

//     this.cumplirAnios = () => {
//         this.edad++
//     }
// }

// clases

class Mascota {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre
        this.edad = edad 
        this.tipo = tipo
    }

    pedirNombre() {
        return this.nombre
    }

    cumplirAnios() {
        this.edad++
    }

}


const mascota1 = new Mascota("Flufy", 5, 'gato')
const mascota2 = new Mascota("Jorge", 12, 'perro')

mascota1.cumplirAnios()
console.log(mascota1)