import { validateAge, validateEmail, validateName } from "../modules/validations.js";
//crear funcion anonima

export const validationUpdateUser = async (req, res, next)=> { 

  const{id_user}=req.params
  const{email, first_name,last_name,age} = req.body
  const validateCorreo = validateEmail(email)
  const validateEdad = validateAge(age)
  const validateNombre = validateName(first_name)
  const validateApellido = validateName(last_name)
  
  if (!validateCorreo) {
    return res.status(400).json({
      message: 'Incorrect email format',
      error: true
    });
  }

  if (!validateEdad) {
    return res.status(400).json({
      message: 'Age must be a number',
      error: true
    });
    
  }
  if (!validateNombre || !validateApellido) {
    return res.status(400).json({
      message: 'First and last name must not contain special characters',
      error: true
    })  
  }

  if (!validateAge(Number(id_user))) {
    return res.status(400).json({
      message: 'id_user must be a number',
      error:true
    }
    )
    
  }
  next();




}


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