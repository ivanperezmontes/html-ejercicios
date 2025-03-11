//const boton = document.getElementById('diana');
const mensaje = document.getElementById('mensaje');

const centro = document.getElementsByClassName('circulo capa9');

boton.addEventListener('click', function(){
    mensaje.style.display = 'block';
});

centro.addEventListener('click',function(){
    centro.style.display = 'block';
});