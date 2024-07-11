const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll ('img');
const btnTodos = document.querySelector('.todos');
const btnCroissants = document.querySelector('.croissants');
const btnMedialunas = document.querySelector('.medialunas');
const btnHojaldres= document.querySelector('.hojaldres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const croissants = platillosArreglo.filter(croissants=> croissants.getAttribute('data-platillo') === 'croissants');
    const medialunas = platillosArreglo.filter(medialunas => medialunas.getAttribute('data-platillo') === 'medialunas');
    const hojaldres = platillosArreglo.filter(hojaldres => hojaldres.getAttribute('data-platillo') === 'hojaldres');
    
    mostrarPlatillos( croissants, medialunas, hojaldres, platillosArreglo);

}

const mostrarPlatillos = (croissants, medialunas, hojaldres, todos) =>{
    btnCroissants.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        croissants.forEach(croissants=> contenedorPlatillos.appendChild(croissants));
    });

    btnMedialunas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         medialunas.forEach(medialunas=> contenedorPlatillos.appendChild(medialunas));
    });

    btnHojaldres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        hojaldres.forEach(hojaldres=> contenedorPlatillos.appendChild(hojaldres));
    });
    
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

/*NOSOTROS HISTORIA*/
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con la clase 'fade-in'
    var fadeInElements = document.querySelectorAll('.fade-in');

    // Añade la clase 'visible' a cada elemento después de un pequeño retraso
    fadeInElements.forEach(function(element) {
        setTimeout(function() {
            element.classList.add('visible');
        }, 800); // 100 ms de retraso
    });
});