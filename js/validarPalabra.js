export const validarPalabra = (palabra) => {
    const regxs = {
        "restricciones": /[A-Z]{1}/,
    }
    if (regxs.restricciones.test(palabra)) 
        return true;
    else
        return false;
}