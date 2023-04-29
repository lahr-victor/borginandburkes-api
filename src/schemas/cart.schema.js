// PACKAGE IMPORTS
import joi from 'joi';

// VALUE EXPORTS

export const cartSchema = joi.object(
    {
        items: joi.array().items(
            {
                productId: joi.string().optional(),
                title: joi.string().required(),
                price: joi.number().positive().greater(0).required(),
                qty: joi.number().positive().greater(0).required(),
            }        
        ),
        total: joi.number().positive().greater(0).required()
    }
)