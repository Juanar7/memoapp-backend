//crear funcion anonima
export const validationLogin = async (req, res, next) => {
  
  const { username, password } = req.body;

  //validamos que los campos no vengan vacios
  if (!username || !password) {
    return res.status(400).json({ 
      message: 'Username and password are required', 
      error: true 
    });
  }
  next();
};