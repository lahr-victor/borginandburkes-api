// PACKAGE IMPORTS
import { Router } from 'express';
import { createOrder } from '../controllers/orders.controllers.js';
import { authenticateSession } from '../middlewares/authenticateSession.middleware.js';

// VALUE IMPORTS

// GLOBAL CONSTANTS
const cartRouter = Router();

// FUNCTIONS
cartRouter.post('/orders', authenticateSession('user'), createOrder);

// VALUE EXPORTS
export default cartRouter;