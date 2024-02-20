//importamos la libreria express
import express from 'express';
import bodyParser from 'body-parser';
import { getUserData } from './services/user.service.js';

// creamos una instancia de express
const app = express();
app.use(bodyParser.json());

// definimos el puerto
const port = 3333;

// definimos una ruta para el servidor
app.get('/', (req, res) => {
  res.send('Hola juan diego');
})
//creamos ruta de login
app.post('/login', async (req, res) => {
 console.log("prueba");
  //destructuracion del objeto
  let { username, password } = req.body

  //validamos que los campos no vengan vacios
  if (!username || !password) {
    return res.send('Username and password are required');
    
  }
  //eliminamos los espacios del string
  username = username.replaceAll(' ', '')
  //traer los datos del usuario de la base de datos
  let userData = await getUserData(username)
  //validamos que el ususario exista en la base de datos
  if (userData == undefined) {
    return res.send('username and password are incorrect');
  }
  //respuesta cuando el usuario existe
  res.send(`Hi,${userData.first_name} ${userData.last_name}`);
})
app.post('/register')

// iniciamos el servidor
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
