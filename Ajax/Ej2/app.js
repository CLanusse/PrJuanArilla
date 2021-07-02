const KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'


function llamarApi(busqueda) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${busqueda}&limit=20`)
        .then( (response)=> response.json())
        .then( (data) => {
            const imagenes = data.data
            
            const imgContainer = document.getElementById('listaImgs')
            imgContainer.innerHTML = ''


            imagenes.forEach( (el) => {
                imgContainer.innerHTML += `
                    <li class="card col-3">
                        <img src=${el.images.downsized_medium.url} alt="">
                    </li>
                `
            } )
        })
}

const formBusqueda = document.getElementById('form-busqueda')
const inputBusqueda = document.getElementById('input-busqueda')

formBusqueda.addEventListener('submit', (event)=>{
    event.preventDefault()

    // console.log(inputBusqueda.value)
    llamarApi(inputBusqueda.value)

    inputBusqueda.value = ''
})
