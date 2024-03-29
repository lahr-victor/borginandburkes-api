// PACKAGE IMPORTS
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

// VALUE IMPORTS
import router from './routes/index.routes.js';

// SERVER CONFIG
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
dotenv.config();

// FUNCTIONS
app.listen(process.env.PORT, () => console.log(`Running server on port ${process.env.PORT}!`));