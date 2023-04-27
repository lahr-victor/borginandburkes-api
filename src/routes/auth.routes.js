import { Router } from "express";
import { logOut, signIn, signUp, signUpAdmin } from "../controllers/auth.controllers.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signInSchema, userSchema } from "../schemas/authSchemas.js";

const authRouter = Router();
authRouter.post("/sign-up", validateSchema(userSchema), signUp);
authRouter.post("/admin", validateSchema(userSchema), signUpAdmin);
authRouter.post("/sign-in", validateSchema(signInSchema),signIn);
authRouter.post("/logout", authValidation, logOut);

export default authRouter;