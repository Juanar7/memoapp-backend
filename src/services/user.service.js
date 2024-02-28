import { conn } from "../config/db.js";

export const getUserDataByUsername = async (username) => {

  try {
    const [respuesta] = await conn.execute(`SELECT * FROM users WHERE username = '${username}'`)
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
    const [respuesta] = await conn.execute(`SELECT * FROM users WHERE email = '${email}'`)
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