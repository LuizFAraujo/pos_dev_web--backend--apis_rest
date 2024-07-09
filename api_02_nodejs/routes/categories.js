import express from 'express';
const router = express.Router();
import Category from '../models/category.js';

router.get('/', (req, res) => {
    const categories = [
        new Category(1, 'Category1', 'Description1', true, new Date()),
        new Category(2, 'Category2', 'Description2', true, new Date()),
        new Category(3, 'Category3', 'Description3', true, new Date()),
    ];
    res.json(categories);
});

router.post('/', (req, res) => {
    const { id, name, description, isActive, createdAt } = req.body;

    const category = new Category({ id, name, description, isActive, createdAt });
    console.log(`********** POST Category - Received Data. **********`);
    // console.log(category);

    res.status(200).send();
});

export default router;