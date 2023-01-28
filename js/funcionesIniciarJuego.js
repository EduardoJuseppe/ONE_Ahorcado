import { funcionesCanvas } from "./canvas.js";

const asignarTamanhoEspacios = (dimencionesCanvas,tamanhoPalabra) =>{
    let objeto = new Object();
    let dimencionLargo = dimencionesCanvas[0];

    const inicioX = Math.trunc(((dimencionLargo*0.1)/2)*(8-(tamanhoPalabra-1)));
    const separadorEspacios = Math.trunc(((dimencionLargo - dimencionLargo*0.1)/8)*0.1)+1;
    const tamanhoEspacios = Math.trunc(((dimencionLargo - dimencionLargo*0.1)/8)-(((dimencionLargo - dimencionLargo*0.1)/8)*0.1));
     
    objeto.inicioX = inicioX;
    objeto.separadorEspacios = separadorEspacios;
    objeto.tamanhoEspacios = tamanhoEspacios;

    return objeto;
};

const seleccionarPalabra = () =>{
    let arrayPalabras = localStorage.getItem('arregloPalabras');
    arrayPalabras = JSON.parse(arrayPalabras);
    console.log(arrayPalabras);
    let min = Math.ceil(0);
    let max = Math.floor(arrayPalabras.length-1);
    let numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);
    return arrayPalabras[numeroSorteado];   
};

const asignarDimencionesCanvas = () =>{
    const valores = [];
    let canvas = document.querySelector('canvas');

    canvas.width=document.querySelector('.divCanvas').clientWidth;
    canvas.height=document.querySelector('.divCanvas').clientHeight;

    valores.push(document.querySelector('.divCanvas').clientWidth);
    valores.push(document.querySelector('.divCanvas').clientHeight);
    return valores;
};

const crearEspacios = (palabraSorteada,valoresCanvas,dimencionesCanvas) =>{
    let finalX = 0;
    let ejeY = Math.trunc((dimencionesCanvas[1] - dimencionesCanvas[1]*0.125));
    let ubicacionEspacios = [];

    for(let x=0;x<palabraSorteada.length;x++){
        ubicacionEspacios.push(valoresCanvas.inicioX);
        finalX = valoresCanvas.inicioX + valoresCanvas.tamanhoEspacios;
        funcionesCanvas.crearEspaciosPalabra(valoresCanvas.inicioX,finalX,ejeY);
        valoresCanvas.inicioX = finalX + valoresCanvas.separadorEspacios;
    }
    return ubicacionEspacios;
};

const crearSpanAlerta = (mensaje) =>{
    const divSpanAlerta = document.querySelector('.spanAlerta');
    if(divSpanAlerta.childElementCount == 0){
        let spanAlerta = document.createElement('span');
        spanAlerta.textContent = mensaje;
        divSpanAlerta.appendChild(spanAlerta);
    }else{
        const span = document.querySelector('span');
        span.textContent='';
        span.textContent=mensaje;
    }
};

export const funcionesIniciarJuego = {
    asignarTamanhoEspacios,
    seleccionarPalabra,
    asignarDimencionesCanvas,
    crearEspacios,
    crearSpanAlerta,
}