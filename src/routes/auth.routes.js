// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import { logOut, signIn, signUp, signUpAdmin } from '../controllers/auth.controllers.js';
import { authenticateSession } from '../middlewares/authenticateSession.middleware.js'
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { signInSchema, userSchema } from '../schemas/authSchemas.js';

// GLOBAL CONSTANTS
const authRouter = Router();

// FUNCTIONS
authRouter.post('/sign-up', validateSchema(userSchema), signUp);
authRouter.post('/admin', validateSchema(userSchema), signUpAdmin);
authRouter.post('/sign-in', validateSchema(signInSchema), signIn);
authRouter.post('/logout', authenticateSession(['user', 'admin']), logOut);

// VALUE EXPORTS
export default authRouter;