import express from 'express';
const router = express.Router();
import Product from '../models/product.js';

router.get('/', (req, res) => {
    const products = [
        new Product(1, 'Product1', 'Description1', 10.5, 100),
        new Product(2, 'Product2', 'Description2', 20.0, 200),
        new Product(3, 'Product3', 'Description3', 30.5, 300),
    ];
    res.json(products);
});

router.post('/', (req, res) => {
    const { id, name, description, price, stock } = req.body;

    const product = new Product({ id, name, description, price, stock });
    console.log(`********** POST Product - Received Data. **********`);
    // console.log(product);

    res.status(200).send();
});

export default router;
