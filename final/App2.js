const colors = ["green", "blue", "rgba(133,122,200)", "#f15025"];
const btnUno = document.getElementById('btnUno');
const btnDos = document.getElementById('btnDos');
const color = document.querySelector('.color');
const imagenes = ["imagenes/uno.jpg","imagenes/dos.jpg", "imagenes/tres.jpg", "imagenes/cuatro.jpg", "imagenes/cinco.jpg", "imagenes/seis.jpg", "imagenes/siete.jpg", "imagenes/ocho.jpg"]



const imagenesCambiantes = document.getElementsByClassName("imagenes-div")[0]

// imagenesCambiantes.appendChild(div)



btnUno.addEventListener("click", function (){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]

});

btnDos.addEventListener("click", function (){
    const randomImagen = getRandomImagen();
    imagenesCambiantes.src = imagenes[randomImagen]
    
});

function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
}

function getRandomImagen() {
return Math.floor(Math.random() * imagenes.length);
}
