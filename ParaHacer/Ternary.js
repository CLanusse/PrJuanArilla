// ///Consologuear si Pepito puede ver Max Max

const persona = {
nombre: "Pepito",
edad: 19,
};

const pelicula = {
titulo: "Mad Max",
edadMinima: 16,
};
//                       condicion               ? action1       :    action2
// console.log( (persona.edad >= pelicula.edadMinima) ? "Puede verla" : "No puede" );



function edadPermitida (persona, pelicula) {
    if (persona.edad >= pelicula.edadMinima) {
        return "Puede Verla"
    } else {
        return "No Puede"
    }
}

console.log(edadPermitida(persona, pelicula))