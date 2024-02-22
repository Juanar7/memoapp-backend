import jwt from "jsonwebtoken";
import config from "../config.js";

export const generateToken = (username) => {
    return jwt.sign({ sub: username }, config.secret_jwt, { expiresIn: '8h', algorithm: "HS256" })
}