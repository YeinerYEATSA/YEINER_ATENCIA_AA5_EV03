import { Router } from "express";
import {
    login,
    register,
    logout,
    profile,
    verifyToken
} from "../Controllers/auth.controller.js";
import { authRequire as authRequired } from "../Middlewares/validateToken.js";
import { validateSchema } from "../Middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";


const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);

export default router;
