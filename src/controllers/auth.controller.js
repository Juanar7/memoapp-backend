import { getUserData } from "../services/user.service.js";
import { validatePassword } from "../modules/auth.js";
import { generateToken } from "../modules/token.js";
import jwt from 'jsonwebtoken';
import config from '../config.js';

export const loginController = async (req, res) => {
  //eliminamos los espacios del string

  const { username, password } = req.body;

  const usernameSinEspacios = username.replaceAll(' ', '')

  try {
    //traer los datos del usuario de la base de datos
    let userData = await getUserData(usernameSinEspacios)
    //validamos que el ususario exista en la base de datos
    if (userData == undefined) {
      return res.status(401).json({ message: 'username and password are incorrect', error: true });
    }
    const validate = await validatePassword(password, userData.password)

    if (!validate) {
      return res.status(401).json({ message: 'username and password are incorrect', error: true });
    }

    const token = generateToken(userData.username)

    //respuesta cuando el usuario existe
    return res.status(200).json({
      detail: { access_token: token, token_type:'Bearer'},
      error: false
    });

  } catch (error) {
    return res.status(500).json({ message: error.message, error: true })
  }
}

export const saludoController = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  try {
    const { sub } = jwt.verify(token, config.secret_jwt);
    const user = await getUserData(sub);
    return res.status(200).json({ message: `Hello ${user.username}`, error: false });
  } catch (error) {
    return res.status(500).json({ message: error.message, error: true });
  }
}