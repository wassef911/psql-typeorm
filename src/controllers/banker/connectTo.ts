import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Banker } from '../../entities/Banker';
import { Client } from '../../entities/Client';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const connectTo = async (req: Request, res: Response, next: NextFunction) => {
    const bankerRepository = getRepository(Banker);
    const clientRepository = getRepository(Client);
    const { id_banker, id_client } = req.params;
    try {
        let banker = await bankerRepository.findOne(id_banker);
        let client = await clientRepository.findOne(id_client);
        if (!banker || !client) throw new Error("Banker or Client not found.");

        banker.clients = [...banker.clients, client];
        await bankerRepository.save(banker);

        const customSuccess = CustomSuccess('Banker connected to client.', banker);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
