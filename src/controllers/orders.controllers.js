// PACKAGE IMPORTS
import dayjs from 'dayjs';
import { ObjectId } from "mongodb"

// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// VALUE EXPORTS
export async function createOrder(req, res) {
    const {items, total} = req.body;
    const orderInformation = {
        userId: res.locals.session.userId,
        items,
        total,
        date: dayjs().toISOString(),
    }
    try {
        const order = await db.collection("orders").insertOne(orderInformation);
        if (order.acknowledged === true){
            res.status(201).send(order);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getOrderById(req, res){
    const { id } = req.params;
    const { userId } = res.locals.session

    try {
      const order = await db.collection('orders').findOne({ _id: new ObjectId(id), userId });
      if (!order) return res.status(404).send('Order not found');
      return res.send(order);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}
