import { validateEmail } from "../modules/validations.js";
//crear funcion anonima
export const validationRegister = async (req, res, next) => {
   
  const {username, email , password , age , first_name , last_name} = req.body

  if(!username || !password || !email || !age || !first_name || !last_name ){
    return res.status(400).json({
      message: 'All fields are required',
      error: true
    });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({
      message: 'Incorrect email format',
      error: true
    });
  }
  next();
};

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