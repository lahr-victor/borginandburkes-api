// PACKAGE IMPORTS
import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// VALUE EXPORTS
export async function createOrder(req, res) {
    const {items, total} = req.body;
    const order = {
        _id: new ObjectId(),
        userId: res.locals.session.userId,
        items,
        total,
        date: dayjs().toISOString(),
    }
    try {
        await db.collection("orders").insertOne(order);
        res.status(201).send(order);
        
    } catch (err) {
        res.status(500).send(err.message);
    }
}