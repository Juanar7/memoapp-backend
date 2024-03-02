//crea una funcion anonima para validar el correo 


export const validateName = (nombre) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(nombre);
}

export const validateAge = (age) => {
    return typeof age === 'number';
}

export const validateEmail = (email) => {
    const re = /\S+@/;
    return re.test(String(email).toLowerCase());
}

export const replaceSpace = (word) => {
    return word.replaceAll(' ', '')
}
