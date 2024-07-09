import express from 'express';
const router = express.Router();
import Customer from '../models/customer.js';

router.get('/', (req, res) => {
    const customers = [
        new Customer(1, 'John', 'Doe', 'john@example.com', '1234567890'),
        new Customer(2, 'Jane', 'Smith', 'jane@example.com', '0987654321'),
        new Customer(3, 'Bob', 'Brown', 'bob@example.com', '1122334455'),
    ];
    res.json(customers);
});

router.post('/', (req, res) => {
    const { id, firstName, lastName, email, phoneNumber } = req.body;

    const customer = new Customer({ id, firstName, lastName, email, phoneNumber });
    console.log(`********** POST Customer - Received Data. **********`);
    // console.log(customer);
    
    res.status(200).send();
});

export default router;
