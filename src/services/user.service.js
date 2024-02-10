import { conn } from "../config/db.js";

export const getUserData = async (username) => {
  const [respuesta] = await conn.execute(`SELECT * FROM users WHERE username = '${username}'`)
  console.log(respuesta)
  return respuesta[0]
};

