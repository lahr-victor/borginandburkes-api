// PACKAGE IMPORTS
import { Router } from 'express';
import { createOrder } from '../controllers/orders.controllers.js';
import { authenticateSession } from '../middlewares/authenticateSession.middleware.js';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { cartSchema } from '../schemas/cart.schema.js';

// VALUE IMPORTS

// GLOBAL CONSTANTS
const cartRouter = Router();

// FUNCTIONS
cartRouter.post('/orders', authenticateSession('user'), validateSchema(cartSchema), createOrder);

// VALUE EXPORTS
export default cartRouter;