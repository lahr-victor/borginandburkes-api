// PACKAGE IMPORTS
import joi from 'joi';

// VALUE EXPORTS
export const productsSchema = joi.object({
  title: joi.string().trim().required(),
  description: joi.string().trim().required(),
  image: joi.string().uri().required(),
  price: joi.number().greater(0).required(),
});