import { conn } from "../config/db.js";

export const getUserData = async (username) => {

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

