// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import authRouter from './auth.routes.js';
import productsRouter from './products.routes.js';
import cartRouter from './cart.routes.js';

// GLOBAL CONSTANTS
const router = Router();

// ROUTES CONFIG
router.use(authRouter);
router.use(productsRouter);
router.use(cartRouter);

// VALUE EXPORTS
export default router;