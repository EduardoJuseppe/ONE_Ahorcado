export const validarTextArea = (textArea) => {
    const regxs = {
        "restricciones": /^\s|[a-z]|[\á\é\í\ó\ú]|[0-9]|\s$/,
    }
    if (regxs.restricciones.test(textArea.value)) 
        return true;
    else
        return false;
}