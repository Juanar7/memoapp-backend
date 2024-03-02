import { Router } from "express";
import { validationLogin, validationRegister } from "../middlewares/login.middleware.js";
import { loginController, saludoController,registerController,updateUserController } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";


export const userRouter=Router();

userRouter.post("/api/login", validationLogin, loginController);
userRouter.get("/api/saludo", verifyToken, saludoController);
userRouter.post("/api/register", validationRegister, registerController);
userRouter.patch("/api/user-update/:id_user", updateUserController);