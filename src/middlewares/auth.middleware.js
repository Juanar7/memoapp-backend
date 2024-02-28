import jwt from 'jsonwebtoken';
import config from '../config.js';
import { getUserDataByEmail, getUserDataByUsername } from '../services/user.service.js';

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No se envio token en el header', error: true });

  const token = authHeader.split(' ')[1];
  try {
    const { sub } = jwt.verify(token, config.secret_jwt);
    const user = await getUserDataByUsername(sub);
    if (!user) return res.status(401).json({ message: 'Usuario no existe', error: true });
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Session expired, please login again', error: true });
    }
    return res.status(500).json({message: 'Internal server error', error: true});
  }
}
