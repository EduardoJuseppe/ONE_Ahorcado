// const url = new URL(window.location);
// console.log(url.searchParams)
// const arregloPalabras = url.searchParams.get("arregloPalabras");
// console.log(arregloPalabras);

const palabras = (palabra) => {
    let arregloPalabras = localStorage.getItem('arregloPalabras');
    arregloPalabras = JSON.parse(arregloPalabras);
    return arregloPalabras.indexOf(palabra);
}

export const modificarLocalStorage = {
    palabras,
}