import { funcionesCanvas } from "./canvas.js";

let contador = 1;

const crearLetrasUsadas = (keyValue,dimencionesCanvas,color) =>{
    let px;
    let ejeYLetrasUsadas = Math.trunc((dimencionesCanvas[1] - dimencionesCanvas[1]*0.0375));
    let pxLetra = Math.trunc(dimencionesCanvas[0]/17 - (dimencionesCanvas[0]/17)*0.10);
    px = `${pxLetra}`+"px";
    funcionesCanvas.letraUsada(keyValue,px,pxLetra*contador,ejeYLetrasUsadas,color);
    contador++;
};

const letraEncontrada = (keyValue,tamanhoEspacios,ubicacionEspacios,ejeY) =>{
    funcionesCanvas.letraEncontrada(keyValue,tamanhoEspacios,ubicacionEspacios,ejeY);
};

const  crearGanarPerder = (texto,dimencionesCanvas,color,valoresCanvas) =>{
    const divLetras = document.querySelector(".divLetras");
    divLetras.style.display = "none";
    let ejeX = Math.trunc(valoresCanvas.tamanhoEspacios/10);
    let ejeY = Math.trunc(valoresCanvas.tamanhoEspacios);
    let px = Math.trunc(valoresCanvas.tamanhoEspacios + valoresCanvas.tamanhoEspacios / 5)
    funcionesCanvas.crearGanarPerder(ejeX,ejeY,texto,color,px);
};

const crearBase = (dimencionesCanvas) =>{
    let ejeX = Math.trunc(dimencionesCanvas[0]*0.33);
    let ejeY = Math.trunc(dimencionesCanvas[1]*0.7);
    let largo = ejeX;
    funcionesCanvas.crearBase(ejeX,ejeY,largo);
};

const crearPersonaje = (dimencionesCanvas,contadorPerder) =>{
    if(contadorPerder===1){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux/4;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.15);
        let largo = Math.trunc(dimencionesCanvas[1]*0.55)+2;
        funcionesCanvas.crearPersonaje(ejeX,ejeY,largo,contadorPerder);
    }  
    if(contadorPerder===2){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux/4;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.15);
        let largo = aux - + aux/4;
        funcionesCanvas.crearPersonaje(ejeX,ejeY,largo,contadorPerder);
    }
    if(contadorPerder===3){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.15); 
        let largo = Math.trunc(dimencionesCanvas[1]*0.15);
        funcionesCanvas.crearPersonaje(ejeX,ejeY,largo,contadorPerder);
    }
    if(contadorPerder===4){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.30);
        let largo = Math.trunc(dimencionesCanvas[1]*0.05);
        funcionesCanvas.crearPersonaje(ejeX,ejeY,largo,contadorPerder);
    }
    if(contadorPerder===5){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.35)-2;
        let largo = Math.trunc(dimencionesCanvas[1]*0.20);
        funcionesCanvas.crearPersonaje(ejeX,ejeY,largo,contadorPerder);
    }
    if(contadorPerder===6){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux + 2;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.35);
        funcionesCanvas.crearPersonaje(ejeX,ejeY,0,contadorPerder);
    }
    if(contadorPerder===7){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux + 2;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.35);
        funcionesCanvas.crearPersonaje(ejeX,ejeY,0,contadorPerder);
    }
    if(contadorPerder===8){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux + 2;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.55) - 4;
        funcionesCanvas.crearPersonaje(ejeX,ejeY,0,contadorPerder);
    }
    if(contadorPerder===9){
        let aux = Math.trunc(dimencionesCanvas[0]*0.33);
        let ejeX = aux + aux + 2;
        let ejeY = Math.trunc(dimencionesCanvas[1]*0.55) - 4;
        funcionesCanvas.crearPersonaje(ejeX,ejeY,0,contadorPerder);
    }
};

export const funcionesTeclado = {
    crearLetrasUsadas,
    letraEncontrada,
    crearGanarPerder,
    crearPersonaje,
    crearBase,
}