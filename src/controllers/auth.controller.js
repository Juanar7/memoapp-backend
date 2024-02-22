import { getUserData } from "../services/user.service.js";
import { validatePassword } from "../modules/auth.js";
import { generateToken } from "../modules/token.js";

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
    console.log(userData);
    const validate = await validatePassword(password, userData.password)
    console.log(validate);

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