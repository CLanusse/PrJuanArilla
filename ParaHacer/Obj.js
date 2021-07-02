// ///1 - Encontrar la temperatura más baja de los tres días

const temperaturasLunes = [16, 20, 12];
const temperaturasMartes = [9, 15, 10];
const temperaturasMiercoles = [14, 20, 12];

temperaturasLunes.push(22)
temperaturasLunes.push(31)

function temperaturaMinima( arreglo ) {
    return Math.min(...arreglo )
}

// console.log( temperaturaMinima(temperaturasLunes) )
// console.log( temperaturaMinima(temperaturasMartes) )
// console.log( temperaturaMinima(temperaturasMiercoles) )
// console.log( temperaturaMinima([4, 20, 36, 40, 2]) )


// ///2 - Agregar un atributo "peso" al objeto tomas

let tomas = {
  especie: "Perro",
  raza: "caniche",
  edad: 14,
};
// console.log(tomas)

tomas.nombre = "Pedro"
// tomas.peso = 40

// console.log(tomas)

// function agregarAtributo () {
//     tomas.peso = 10
//     console.log(tomas)  
// }

// agregarAtributo()

// ///3 - Crear una clase (o función constructora) que permita crear objetos tipo Mascota con
// // las mismas propiedades que tomás


class Mascosta {
    constructor (nombre, especie, raza, edad, peso) {
        this.nombre = nombre  
        this.especie = especie
        this.raza = raza
        this.edad = edad
        this.peso = peso
    }
}



// // 4 .- Usando métodos de array la clase anterior creada, agregar varios objetos de tipo Mascota
// // al array Mascota. Luego recorrer el array y buscar cuál es la mascota más joven, 
// // y luego cuál es la más pesada

// const mascota1 = new Mascosta("Tomás", "Perro", "Doberman", 5)
// const mascota2 = new Mascosta("Pedro", "Gato", "gato", 11)

const mascotas = []

mascotas.push( new Mascosta("Pedro", "Gato", "gato", 11, 10) )
mascotas.push( new Mascosta("Tomás", "Perro", "Doberman", 5, 20) )
mascotas.push( new Mascosta("Jose", "Gato", "gato", 14, 7) )
mascotas.push( new Mascosta("Adrian", "Gato", "gato", 3, 14) )

// menor edad
mascotas.sort( (a, b) => a.edad - b.edad)
console.log(mascotas[0])

// mayor peso
mascotas.sort( (a, b) => b.peso - a.peso)
console.log(mascotas[0])


