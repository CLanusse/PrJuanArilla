let carrito = []
let baseArticulos = []


fetch('./stock.json')
    .then( res => res.json())
    .then( data => {

        baseArticulos = data
        console.log(baseArticulos)

        baseArticulos.forEach( (producto)=>{

            let div = document.createElement('div')
            div.className = "col-lg-3 col-md-5"
            div.innerHTML = `
                <div class="card mt-4">
                <img class="card-img-top img-fluid" src=${producto.imagen} alt="">
                    <div class="card-body">
                        <h3 class="card-title">${producto.nombre}</h3>
                        <h4>${(producto.precio).toFixed(2)}</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat
                        hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
                        perspiciatis molestias iure, ducimus!</p>
                        <button class="comprar-btn" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
                        <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                        4.0 stars
                    </div>
                </div>
            `
            productosContenedor.appendChild(div)
        } )

})


console.log(baseArticulos)




// class Producto {
//     constructor (id, nombre, precio, imagen, stock) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.imagen = imagen;
//         this.stock = stock;
//     }
// }


// baseArticulos.push( new Producto(1, `Zapatillas`, 5500, `imagenes/uno.jpg`,0) )
// baseArticulos.push( new Producto(2, `Zapatillas`, 11500, `imagenes/dos.jpg`,10) )
// baseArticulos.push( new Producto(3, `Zapatillas`, 12999, `imagenes/tres.jpg`,12) )
// baseArticulos.push( new Producto(4, `Zapatillas`, 8500, `imagenes/cuatro.jpg`,3) )
// baseArticulos.push( new Producto(5, `Zapatillas`, 6599, `imagenes/cinco.jpg`,4) )
// baseArticulos.push( new Producto(6, `Zapatillas`, 13599, `imagenes/seis.jpg`,7) )
// baseArticulos.push( new Producto(7, `Zapatillas`, 7999, `imagenes/siete.jpg`,9) )
// baseArticulos.push( new Producto(8, `Zapatillas`, 5999, `imagenes/ocho.jpg`,1) )


// console.log(baseArticulos);

//1- 
const productosContenedor = document.getElementById("productos")





function agregarAlCarrito (id) { 

    const productoEnCarrito = carrito.find( (el)=> el.id == id ) 

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1
    } else {

        const productoElegido = baseArticulos.find( (el)=> el.id == id )   
        let tieneStock = validarStock(productoElegido.stock)
    
        if (tieneStock) {
    
            carrito.push({
                id: productoElegido.id,
                nombre: productoElegido.nombre,
                precio: productoElegido.precio,
                img: productoElegido.imagen,
                cantidad: 1
            })
            console.log(carrito)
    
        } else {
            alert("no Hay Stock")
        }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
    
}

// Quitar AL CARRITO //  
function quitarDelCarrito (id) { 
    
    const productoAEliminar = carrito.find( (el)=> el.id == id )
    
    productoAEliminar.cantidad -= 1
        
    if (productoAEliminar.cantidad === 0) {
        let indice = carrito.indexOf(productoAEliminar)
        carrito.splice(indice, 1)
    }

    // console.log(carrito)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    actualizarCarrito()
}


// Validar Stock// 
function validarStock(stock){
    if (stock > 0) {
        return true
    } else {
        return false
    }
}

const contenedorCarrito = document.getElementById('carrito-contenedor')
const precioTotal = document.getElementById('precioTotal')
const cantidadCarrito = document.getElementById('cantidadCarrito')

function actualizarCarrito() {

    contenedorCarrito.innerHTML = ''

    carrito.forEach( (producto) => {
        let div = document.createElement('div')
        div.className = "card"
        div.innerHTML = `
            <h4>${producto.nombre}</h4>
            <img src=${producto.img}>
            <p>Precio: $${(producto.precio * producto.cantidad).toFixed(2)}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button class="comprar-btn btn btn-primary" onclick="quitarDelCarrito(${producto.id})">Quitar</button>
        `
        contenedorCarrito.appendChild(div)
    } )

    precioTotal.innerText = carrito.reduce( (acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0 )
    // cantidadCarrito.innerText = carrito.length
    cantidadCarrito.innerText = carrito.reduce( (acumulador, producto) => acumulador + producto.cantidad, 0 )
}

// localstorage
const carritoLocalStorage =  JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
    carrito = carritoLocalStorage

    // carritoLocalStorage.forEach((producto) => {
    //     agregarAlCarrito(producto.id)
    // })
    console.log(carrito)

    actualizarCarrito()
}


// ===========

// const algunProducto = baseArticulos.find(el => el.id === 1)

// carrito.push( {id: algunProducto.id, nombre: algunProducto.nombre, precio: algunProducto.precio, cantidad: 1} )

// algunProducto.precio = 123123213

// console.log(algunProducto)
// console.log(carrito)
// console.log(baseArticulos)