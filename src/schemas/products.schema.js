// PACKAGE IMPORTS
import joi from 'joi';

// VALUE EXPORTS
export const productsSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  image: joi.string().uri().required(),
  price: joi.number().greater(0).required(),
});