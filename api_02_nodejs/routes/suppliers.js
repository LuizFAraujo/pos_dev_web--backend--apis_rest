import express from 'express';
const router = express.Router();
import Supplier from '../models/supplier.js';

router.get('/', (req, res) => {
    const suppliers = [
        new Supplier(1, 'Supplier1', 'Contact1', 'contact1@example.com', '1234567890'),
        new Supplier(2, 'Supplier2', 'Contact2', 'contact2@example.com', '0987654321'),
        new Supplier(3, 'Supplier3', 'Contact3', 'contact3@example.com', '1122334455'),
    ];
    res.json(suppliers);
});

router.post('/', (req, res) => {
    const { id, companyName, contactName, email, phone } = req.body;

    const supplier = new Supplier({ id, companyName, contactName, email, phone });
    console.log(`********** POST Supplier - Received Data. **********`);
    // console.log(supplier);

    res.status(200).send();
});

export default router;
