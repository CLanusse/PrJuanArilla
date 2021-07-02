///Terminar de escribir la función que agregue propiedades al objeto "juan"

let juan = {
  nombre: "Juan",
  apellido: "",
  edad: 0,
};

function setearPropiedad(propiedad, valor) {
    juan[propiedad] = valor
}

setearPropiedad("peso", 50)
setearPropiedad("edad", 25)
setearPropiedad("apellido", "Arilla")
setearPropiedad("trabajo", "contador")

// juan["edad"] = 50
console.log(juan)
// por ejemplo
// setearPropiedad("peso", 80) agrega la propiedad peso al objeto con, con un valor de 80



