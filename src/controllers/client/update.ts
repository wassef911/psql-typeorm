
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/customError';
import { Client } from '../../entities/Client';
import { CustomSuccess } from '../../utils/customSuccess';

export const update = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = getRepository(Client);
    const {
        first_name,
        last_name,
        email,
        card_number,
        balance,
    } = req.body;
    const { id } = req.params;
    try {
        let client = await clientRepository.findOne(id);
        if (!client) throw new Error("Client not found.")
        console.log(client.card_number);
        const clientUpdated = await clientRepository.save({
            ...client,
            first_name,
            last_name,
            email,
            card_number,
            balance,
        });
        const customSuccess = CustomSuccess('Client data updated.', clientUpdated);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
