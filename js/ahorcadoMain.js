import { funcionesLocalStorage } from "./funcionesLocalStorage.js";

const direccionar = (e) => {
    e.preventDefault();
    if(e.target.name === 'iniciar'){
        window.location.href = "assets/iniciar_juego.html"; 
    }else if(e.target.name === 'agregar'){
        window.location.href = "assets/ingresar_palabra.html";    
    }
}

funcionesLocalStorage.llenarLocalStorage();

const agregar = document.querySelector(".agregar");
const iniciar = document.querySelector('.iniciar');
iniciar.addEventListener('click',direccionar);
agregar.addEventListener('click',direccionar);