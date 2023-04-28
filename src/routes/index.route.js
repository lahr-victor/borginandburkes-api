// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import authRouter from './auth.routes.js';
import productsRouter from './products.routes.js';

// GLOBAL CONSTANTS
const router = Router();

// ROUTES CONFIG
router.use(authRouter);
router.use(productsRouter);

// VALUE EXPORTS
export default router;