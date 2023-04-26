// PACKAGE IMPORTS
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

// SERVER CONFIG
dotenv.config();

// DATABASE CONFIG
const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
  await mongoClient.connect();
  console.log('MongoDB connected!');
} catch (error) {
  console.log(error.message);
}

// VALUE EXPORTS
export const db = mongoClient.db();