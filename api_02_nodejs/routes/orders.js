import express from 'express';
const router = express.Router();
import Order from '../models/order.js';

router.get('/', (req, res) => {
    const orders = [
        new Order(1, 1, 1, new Date(), 1),
        new Order(2, 2, 2, new Date(), 2),
        new Order(3, 3, 3, new Date(), 3),
    ];
    res.json(orders);
});

router.post('/', (req, res) => {
    const { id, productId, customerId, orderDate, quantity } = req.body;

    const order = new Order({ id, productId, customerId, orderDate: new Date(orderDate), quantity });
    console.log(`********** POST Order - Received Data. **********`);
    // console.log(order);

    res.status(200).send();
});

export default router;