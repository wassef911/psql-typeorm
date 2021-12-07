
import express from 'express';

import { Client } from 'entities/Client';
import { Banker } from '../entities/Banker';

const router = express.Router();

router.post('/banker/:banker_id/client/:client_id', async (req, res) => {
    const { banker_id, client_id } = req.params;
    const client = await Client.findOne(parseInt(client_id));
    const banker = await Banker.findOne(parseInt(banker_id));
    if (!banker && !client) return res.status(404).json({ message: "Banker or Client not found!" });

    banker.clients = [client];
    await banker.save();

    return res.status(201).json({ message: 'Banker Connected to client.' });
});

export { router as connectBankerToClientRouter };