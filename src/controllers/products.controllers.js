// PACKAGE IMPORTS
import dayjs from 'dayjs';

// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// VALUE EXPORTS
export async function registerProduct(req, res) {
  const { title, description, image, price } = req.body;
  const product = {
    title,
    description,
    image,
    price: (Number(price)),
    date: dayjs().toISOString(),
  }

  try {
    await db.collection('products').insertOne(product);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}