import { Router } from "express";
import { validationLogin } from "../middlewares/login.middleware.js";
import { loginController } from "../controllers/auth.controller.js";

export const authRouter=Router();

authRouter.post("/api/login", validationLogin, loginController);
