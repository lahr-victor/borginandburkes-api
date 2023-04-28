// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { productsSchema } from '../schemas/products.schema.js';
import { registerProduct } from '../controllers/products.controllers.js';
import { authenticateSession } from '../middlewares/authenticateSession.middleware.js';

// GLOBAL CONSTANTS
const productsRouter = Router();

// FUNCTIONS
productsRouter.post('/products', authenticateSession('admin'), validateSchema(productsSchema), registerProduct);

// VALUE EXPORTS
export default productsRouter;