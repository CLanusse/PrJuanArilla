// Asynchronous JavaScript And XML 


const cita = document.getElementById('quote')
const autor = document.getElementById('author')


// let id = 0

function llamarAPI() {
        // id++

        fetch(`https://www.breakingbadapi.com/api/quote/random`)
            .then((respuesta)=> respuesta.json()) 
            .then((data) => {

                console.log(data[0].author)
                console.log(data[0].quote)

                cita.innerText = data[0].quote
                autor.innerText = data[0].author
            })
            
}



