

/*
Declarar una función constructora llamada Usuario que reciba: 
nombre (string), 
apellido (string), 
libros (array de objetos) 
y mascotas (array de strings). 

Implementar las propiedades instancia desde los valores recibidos 
como argumento y los siguientes métodos en su prototipo:

-getFullName: debe retornar un string con el nombre y apellido del usuario. (utilizar template string).

-addMascota: debe agregar una mascota (mascota) al arreglo de mascotas del usuario. no debe retornar nada.

-getMascotas: debe retornar la cantidad de mascotas que tiene el usuario.


getMascotas: Suponiendo que el usuario tiene 
estas mascotas: ['perro', 'gato'] usuario.getMascotas() debería devolver 2.

getBooks: Suponiendo que el usuario tiene estos libros: [{nombre: 'El señor de las moscas',
autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] 
usuario.getBooks() debería devolver ['El señor de las moscas', 'Fundacion'].

getFullName: Suponiendo que el usuario tiene: nombre: 'Elon' y apellido: 'Musk' 
usuario.getFullName() deberia devolver 'Elon Musk
*/

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros // array de objetos
        this.mascotas = mascotas // array de strings
    }

    getFullName() {
        // return `${this.nombre} ${this.apellido}`
        return this.nombre + " " + this.apellido
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    getMascotas() {
        return this.mascotas.length
    }

    getBooks() {
        //arreglo con sólo los nombres de los libros
        return this.libros.map( (libro) => libro.nombre )
    }

    getAutores() {
        //arreglo con sólo los nombres de los libros
        return this.libros.map( (libro) => libro.autor )
    }
}


const usuario1 = new Usuario(
    'Juan', 
    'Perez', 
    [{nombre: 'Harry Potter', autor: 'Rowling'},{nombre: 'El señor de las moscas', autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],
    ['Perro', 'Gato']
)

console.log( usuario1.getFullName() )

usuario1.addMascota('Tortuga')
usuario1.addMascota('Delfin')

console.log( usuario1.getBooks() )
console.log( usuario1.getAutores() )

