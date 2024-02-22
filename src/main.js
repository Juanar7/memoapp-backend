//importamos la libreria express
import express from 'express';
import bodyParser from 'body-parser';
import { getUserData } from './services/user.service.js';
import { authRouter } from './routes/auth.routes.js'
import { hashPassword } from './modules/auth.js';

// creamos una instancia de express
const app = express();
app.use(bodyParser.json());

// definimos el puerto
const port = 3333;

// definimos una ruta para el servidor
app.get('/', async (req, res) => {
  const password = await hashPassword('LJ_ap_3008')
  console.log(password);
  res.send('Hola juan diego');
})

app.post('/register')

app.use(authRouter);

// iniciamos el servidor
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
