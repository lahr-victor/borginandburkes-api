// PACKAGE IMPORTS
import { Router } from 'express';
import authRouter from './auth.routes.js';

// GLOBAL CONSTANTS
const router = Router();
router.use(authRouter);

// VALUE EXPORTS
export default router;