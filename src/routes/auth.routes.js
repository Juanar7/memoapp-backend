import { Router } from "express";
import { validationLogin } from "../middlewares/login.middleware.js";
import { loginController, saludoController } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

export const authRouter=Router();

authRouter.post("/api/login", validationLogin, loginController);
authRouter.get("/api/saludo", verifyToken, saludoController);
