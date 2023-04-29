// PACKAGE IMPORTS
import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

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

export async function retrieveProducts(req, res) {
  try {
    const products = (
      await db.collection('products')
        .find()
        .toArray()
    );
    return res.send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function retrieveProductById(req, res) {
  const { id } = req.params;

  try {
    const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
    if (!product) return res.status(404).send('This product is not registered!');
    return res.send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}