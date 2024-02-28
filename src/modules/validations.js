//crea una funcion anonima para validar el correo 

export const validateEmail = (email) =>{
    const re = /\S+@/;
    return re.test(String(email).toLowerCase());
}

export const replaceSpace = (word) =>{
    return word.replaceAll(' ', '')
}
