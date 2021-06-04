const botonCarritoAbrir = document.getElementById('modalCarrito')
const botonCarritoCerrar = document.getElementById('modal-cerrar')
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]


botonCarritoAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
    // contenedorModal.classList.add('modal-active')
})
botonCarritoCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
    // contenedorModal.classList.remove('modal-active')
})