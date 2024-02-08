//importamos la libreria express
import express from 'express';

// creamos una instancia de express
const app = express();

// definimos el puerto
const port = 3333;

// definimos una ruta para el servidor
app.get('/', (req, res) => {
  res.send('Hola mundo');
})

// iniciamos el servidor
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});