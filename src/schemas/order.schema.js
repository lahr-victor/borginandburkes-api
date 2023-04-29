// PACKAGE IMPORTS
import joi from 'joi';

// VALUE EXPORTS

export const orderSchema = joi.object(
    {
        acknowledged: joi.boolean().valid(true).required(),
        insertedId: joi.string().required(),
    }
)