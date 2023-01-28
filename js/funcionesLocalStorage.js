const consultarLocalStorage = () =>{
    let consultarArreglo = localStorage.getItem('arregloPalabras');
    consultarArreglo = JSON.parse(consultarArreglo);

  }
  
  const llenarLocalStorage = () => {
    const arregloPalabras = [
      'HTML','NUEVA','LAPTOP',
      'YOUTUBE','FACEBOOK','LAPIZ',
      'TAZA','LLUVIA','CABLE',
      'MADERA','MOUSE','ESCALERA',
      'PLATO','CELULAR','PANTALLA',
      'PALETA','ZAPATO','LLAVE',
      'PUERTA','COLOR','PERRO',
      'GATO','PERFUME','CASA',
      'BOCINA','LUZ','SOL',
      'MOCHILA','PINO','NETFLIX',
      'XOLA','PAPALOTE','ESPEJO',
      'TAPETE','USB','JAVA',
      'SCRIPT','LUNA','CANCION',
      'GANAR','PERDER','BOTON',
      'PANTALON','MESA','PALO',
      'TENIS','SAMSUNG','METRO',
      'UBER','EMPATE','FUTBOL',
      'OJO','AZUCAR','COMILLAS',
      'CARRO','OSO','LEON',
      'OREJA','CHIP','DIOS',
      'MAR','AGUA','PAPAS',
      'AMAZON','EDAD','FORMA',
      'BOMBA','PEDAL','SIGNO',
      'HUESO','ALTURA','CAMINO',
      'HORA','MINUTO','SEGUNDO',
      'PLACA','AHORCADO','ARMA',
      'HOJA','PLUMA','PLUMON',
      'PELO','JUICIO','VIVIR',
      'SILLA','MUEBLE','TABLA',
      'LOGO','PASTO','SAL',];
  
    if (localStorage){
      if(localStorage.getItem('arregloPalabras') !== undefined && localStorage.getItem('arregloPalabras')){
        consultarLocalStorage();
      }else{       
        localStorage.setItem('arregloPalabras', JSON.stringify(arregloPalabras));
        consultarLocalStorage();
      }  
    }
  }

  export const funcionesLocalStorage = {
    llenarLocalStorage,
  }