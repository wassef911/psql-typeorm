
import express from 'express';
import { Banker } from '../entities/Banker';

const router = express.Router();

router.post('/banker', async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        card_number,
        employee_number,
    } = req.body;

    const banker = Banker.create({
        first_name,
        last_name,
        email,
        card_number,
        employee_number,
    });

    await banker.save();

    return res.status(201).json(banker);
});

export { router as createBankerRouter };