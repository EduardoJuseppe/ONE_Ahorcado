var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

const crearEspaciosPalabra = (inicioX,finalX,ejeY) =>{
    pincel.beginPath();
    pincel.lineWidth=5;
    pincel.strokeStyle="#0A3871";
    pincel.moveTo(inicioX,ejeY); 
    pincel.lineTo(finalX,ejeY);
    pincel.stroke(); //visualizar línea
};

const letraUsada = (letra,px,ubicacion,ejeYLetrasUsadas,color) =>{
    pincel.beginPath() 
    pincel.fillStyle= color; 
    pincel.font="bold "+`${px}`+ " serif"; 
    pincel.fillText(letra,ubicacion,ejeYLetrasUsadas); 
};

const letraEncontrada = (keyValue,px,ubicacionEspacios,ejeY) => {
    px = px - px/3.5;
    let centrar = px/7;
    px = px+"px";
    pincel.beginPath() 
    pincel.fillStyle="#495057"; 
    pincel.font="bold "+`${px}`+ " serif"; 
    pincel.fillText(keyValue,ubicacionEspacios+centrar,ejeY);
};

const  crearGanarPerder = (ejeY,ejeX,texto,color,px) =>{
    pincel.beginPath() 
    pincel.fillStyle=color; 
    pincel.font="bold "+`${px}`+ " serif"; 
    pincel.fillText(texto,ejeY,ejeX);
};

const crearBase = (ejeX,ejeY,largo) =>{
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(ejeX,ejeY,largo,5);
};

const crearPersonaje = (ejeX,ejeY,largo,contadorPerder) =>{
    if(contadorPerder===1){
        pincel.fillStyle = "#0A3871";
        pincel.fillRect(ejeX,ejeY,5,largo);
    }
    if(contadorPerder===2){
        pincel.fillStyle = "#0A3871";
        pincel.fillRect(ejeX,ejeY,largo,5);
    }
    if(contadorPerder===3){
        pincel.fillStyle = "#0A3871";
        pincel.fillRect(ejeX,ejeY,5,largo);
    }
    if(contadorPerder==4){    
        pincel.fillStyle = "#0A3871";
        pincel.beginPath();
        pincel.arc(ejeX,ejeY,largo, 0, 2*Math.PI);
        pincel.fill();

        pincel.fillStyle = "white";
        pincel.beginPath();
        pincel.arc(ejeX,ejeY,largo-largo/4, 0, 2*Math.PI);
        pincel.fill();
    }
    if(contadorPerder==5){
        pincel.fillStyle = "#0A3871";
        pincel.fillRect(ejeX,ejeY,5,largo);
    }
    if(contadorPerder==6){
        pincel.beginPath();
        pincel.strokeStyle = "#0A3871";
        pincel.moveTo(ejeX, ejeY);
        pincel.lineTo(ejeX-ejeX*.06,ejeY+ejeY*.18);
        pincel.stroke();
    }
    if(contadorPerder==7){
        pincel.beginPath();
        pincel.strokeStyle = "#0A3871";
        pincel.moveTo(ejeX, ejeY);
        pincel.lineTo(ejeX+ejeX*.06,ejeY+ejeY*.18);
        pincel.stroke();
    }
    if(contadorPerder==8){
        pincel.beginPath();
        pincel.strokeStyle = "#0A3871";
        pincel.moveTo(ejeX, ejeY);
        pincel.lineTo(ejeX-ejeX*.05,ejeY+ejeY*.12);
        pincel.stroke();
    }
    if(contadorPerder==9){
        pincel.beginPath();
        pincel.strokeStyle = "#0A3871";
        pincel.moveTo(ejeX, ejeY);
        pincel.lineTo(ejeX+ejeX*.05,ejeY+ejeY*.12);
        pincel.stroke();
    }


};




export const funcionesCanvas = {
    crearEspaciosPalabra,
    letraUsada,
    letraEncontrada,
    crearGanarPerder,
    crearBase,
    crearPersonaje,
}