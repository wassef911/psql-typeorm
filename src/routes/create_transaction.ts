
import express from 'express';
import { Client } from '../entities/Client';
import { Transaction, TransactionType } from '../entities/Transactions';

const router = express.Router();

router.post('/transaction/:client_id', async (req, res) => {

    const { client_id } = req.params;
    const client = await Client.findOne(parseInt(client_id));
    if (!client) return res.status(404).json({ message: "client not found." });

    const { type, amount } = req.body;
    const transaction = Transaction.create({
        amount,
        type,
        client
    })

    // is a deposit or a withdraw
    client.balance = (type === TransactionType.DEPOSIT) ? client.balance + amount : client.balance - amount;

    await client.save();
    await transaction.save();
    res.status(201).json({ message: "transaction recorded." })
});

export { router as createClientRouter };