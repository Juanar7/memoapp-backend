import { Router } from "express";
import { validationLogin, validationRegister } from "../middlewares/login.middleware.js";
import { loginController, saludoController,registerController } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";


export const authRouter=Router();

authRouter.post("/api/login", validationLogin, loginController);
authRouter.get("/api/saludo", verifyToken, saludoController);
authRouter.post("/api/register", validationRegister, registerController);