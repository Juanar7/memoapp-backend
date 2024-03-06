import { conn } from "../config/db.js";

export const updateDataUser = async (id_user, email, age, first_name, last_name) => {
  try {
    const query = 'UPDATE users SET email = ?, age = ?, first_name = ?, last_name = ? WHERE id_user = ?';
    await conn.execute(query, [email, age, first_name, last_name, id_user]);

  } catch (error) {
    console.error('Error en updateDataUser', error);
    throw new Error('Error al consultar la base de datos');
  }
}


export const getUserDataByUsername = async (username) => {

  try {
    const query = 'SELECT * FROM users WHERE username = ?';
    const [respuesta] = await conn.execute(query, [username])
    console.log('Respuesta del username')
    console.log(respuesta)
    return respuesta[0]
  } catch (error) {
    console.error('Error en getUserData')
    console.log(error)
    throw new Error('Error al consultar la base de datos')
  }

};

export const getUserDataByEmail = async (email) => {

  try {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [respuesta] = await conn.execute(query, [email])
    console.log('Respuesta del email')
    console.log(respuesta)
    return respuesta[0]
  } catch (error) {
    console.error('Error en getUserData')
    console.log(error)
    throw new Error('Error al consultar la base de datos')
  }

};


// Hecho por nicolas
export const createUser = async (username, email, password, age, first_name, last_name) => {
  try {
    const query = `INSERT INTO users (username, email, password, age, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?)`
    const params = [username, email, password, age, first_name, last_name]
    const [respuesta] = await conn.execute(query, params)
    console.log(respuesta)
  } catch (error) {
    console.error('Error en createUser')
    console.log(error)
    throw new Error('Error al crear el usuario')
  }
}