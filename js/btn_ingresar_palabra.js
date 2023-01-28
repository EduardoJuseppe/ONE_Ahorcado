import { modificarLocalStorage } from "./palabras.js";
import { validarTextArea } from "./validarTextArea.js";

const guardar_empezar = document.querySelector(".guardar");
const cancelar = document.querySelector(".cancelar");

const direccionar = (e) => {
    e.preventDefault();
    if (e.target.name === 'guardar') {
        const palabra = document.querySelector('.AreaMensaje').value;
        if(modificarLocalStorage.palabras(palabra) != -1){
            document.querySelector('.spanMaxLetras').textContent = ' Ya contamos con la palabra que se ha ingresado, favor de ingresar otra palabra';
            document.querySelector('.spanMaxLetras').classList.add('colorRojo');
        }else{
            const palabra = document.querySelector('.AreaMensaje');
            if(validarTextArea(palabra)){
                document.querySelector('.spanMaxLetras').textContent = ' Palabra max 8 letras mayusculas,sin numeros, acentos o espacios';
                document.querySelector('.spanMaxLetras').classList.add('colorRojo');
            }else{
                document.querySelector('.spanMaxLetras').textContent = ' Ingresando la nueva palabra';
                document.querySelector('.spanMaxLetras').classList.toggle('colorRojo');
                agregarNuevaPalabra(palabra.value);
                setTimeout(() => {   
                    window.location.href = "../index.html";
                }, 2500);
            }
        }
    } else if (e.target.name === 'cancelar') {
        window.location.href = "../index.html";
    }
}

const agregarNuevaPalabra = (palabra) => {
    let arregloPalabras = localStorage.getItem('arregloPalabras');
    arregloPalabras = JSON.parse(arregloPalabras);
    arregloPalabras.push(palabra);
    localStorage.setItem('arregloPalabras', JSON.stringify(arregloPalabras));
};

cancelar.addEventListener('click', direccionar);
guardar_empezar.addEventListener('click', direccionar);