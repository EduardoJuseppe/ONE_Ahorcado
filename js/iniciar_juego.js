import { funcionesIniciarJuego } from "./funcionesIniciarJuego.js";
import { funcionesTeclado } from "./funcionesTeclado.js";
import { validarPalabra } from "./validarPalabra.js";

let ubicacionEspacios = [];
let palabraSorteada;
let valoresCanvas = new Object ();
let dimencionesCanvas = [];
let letrasUsadas = [];
let marcador = false;
let ganar = false;
let perder = false;
let contadorGanar = 0;
let contadorPerder = 0;
let letrasGanadoras = [];

const iniciarJuego = () =>{
    palabraSorteada = funcionesIniciarJuego.seleccionarPalabra();
    dimencionesCanvas = funcionesIniciarJuego.asignarDimencionesCanvas();
    valoresCanvas = funcionesIniciarJuego.asignarTamanhoEspacios(dimencionesCanvas,palabraSorteada.length); 
    ubicacionEspacios = funcionesIniciarJuego.crearEspacios(palabraSorteada,valoresCanvas,dimencionesCanvas);
    funcionesTeclado.crearBase(dimencionesCanvas);
    console.log(palabraSorteada);
};

const direccionar = (e) => {
    if(e.target.name === 'nuevo_juego'){
        window.location.href = "iniciar_juego.html";
    }else if(e.target.name === 'desistir'){
        window.location.href = "../index.html";
    }
};

const jugandoJuego = (keyValue) => {
    if(validarPalabra(keyValue) && keyValue.length === 1){
        if(!ganar && !perder){
            console.log(keyValue);
            if(letrasGanadoras.length<1){
                for(let x=0; x < palabraSorteada.length; x++){
                    if(keyValue === palabraSorteada.charAt(x)){
                        console.log('Letra Igual');
                        let ejeY = Math.trunc((dimencionesCanvas[1] - dimencionesCanvas[1]*0.15));
                        console.log(ubicacionEspacios[x]);
                        console.log(valoresCanvas.tamanhoEspacios);
                        funcionesTeclado.letraEncontrada(keyValue,valoresCanvas.tamanhoEspacios,ubicacionEspacios[x],ejeY);
                        contadorGanar++;
                        marcador=true;
                        letrasGanadoras.push(keyValue);
                    }
                }
            }else{
                if(letrasGanadoras.indexOf(keyValue) !== -1){
                    console.log("Letra ganadora");
                }else{
                    for(let x=0; x < palabraSorteada.length; x++){
                        if(keyValue === palabraSorteada.charAt(x)){
                            console.log('Letra Igual');
                            let ejeY = Math.trunc((dimencionesCanvas[1] - dimencionesCanvas[1]*0.15));
                            console.log(ubicacionEspacios[x]);
                            console.log(valoresCanvas.tamanhoEspacios);
                            funcionesTeclado.letraEncontrada(keyValue,valoresCanvas.tamanhoEspacios,ubicacionEspacios[x],ejeY);
                            contadorGanar++;
                            marcador=true;
                            letrasGanadoras.push(keyValue);
                        }
                    }
                }
            }
             
            if(letrasUsadas.length<1){
                if(!marcador){
                    funcionesTeclado.crearLetrasUsadas(keyValue,dimencionesCanvas,'red');
                    contadorPerder++;
                    funcionesTeclado.crearPersonaje(dimencionesCanvas,contadorPerder);
                    letrasUsadas.push(keyValue);
                    marcador = false;
                }else{
                    funcionesTeclado.crearLetrasUsadas(keyValue,dimencionesCanvas,"#495057");
                    letrasUsadas.push(keyValue);
                    marcador = false;
                } 
            }else{
                if(letrasUsadas.indexOf(keyValue) !== -1){
                    funcionesIniciarJuego.crearSpanAlerta('< La letra ' + `${keyValue}` + ' ya fue usadas >');
                }else{
                    if(!marcador){
                        funcionesTeclado.crearLetrasUsadas(keyValue,dimencionesCanvas,'red');
                        contadorPerder++;
                        funcionesTeclado.crearPersonaje(dimencionesCanvas,contadorPerder);
                        if(contadorPerder === 9){
                            funcionesTeclado.crearGanarPerder('Perdiste vuelve a intentarlo!',dimencionesCanvas,'red',valoresCanvas);
                            perder=true;
                        }
                        letrasUsadas.push(keyValue);
                        marcador = false;
                    }else{
                        funcionesTeclado.crearLetrasUsadas(keyValue,dimencionesCanvas,"#495057");
                        letrasUsadas.push(keyValue);
                        marcador = false;
                    } 
                }
            }
        }
        if(contadorGanar === palabraSorteada.length){
            funcionesTeclado.crearGanarPerder('Felicidades Ganaste!',dimencionesCanvas,'#495057',valoresCanvas);
            ganar=true;
            contadorGanar++;
        }
    }else{
        if(!ganar && !perder)
        funcionesIniciarJuego.crearSpanAlerta('< '+ '"' + `${keyValue}` + '" ' + ' no es una letra mayuscula >');
    }
};

iniciarJuego();

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let keyValue = event.key;
    jugandoJuego(keyValue);
},false);


const inputs = document.querySelectorAll(".btnLetra");
console.log(inputs);

inputs.forEach(input => {
    input.addEventListener("click", (event) =>{
        let keyValue = event.target.innerHTML;
        jugandoJuego(keyValue);  
    });
});





const nuevo_juego = document.querySelector('.nuevo_juego');
const desistir = document.querySelector('.desistir');
nuevo_juego.addEventListener("click", direccionar);
desistir.addEventListener("click", direccionar);