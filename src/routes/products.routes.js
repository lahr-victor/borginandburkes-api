// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { productsSchema } from '../schemas/products.schema.js';
import { registerProduct, retrieveProductById, retrieveProducts } from '../controllers/products.controllers.js';
import { authenticateSession } from '../middlewares/authenticateSession.middleware.js';

// GLOBAL CONSTANTS
const productsRouter = Router();

// FUNCTIONS
productsRouter.post('/products', authenticateSession(['admin']), validateSchema(productsSchema), registerProduct);
productsRouter.get('/products', retrieveProducts);
productsRouter.get('/products/:id', retrieveProductById);

// VALUE EXPORTS
export default productsRouter;