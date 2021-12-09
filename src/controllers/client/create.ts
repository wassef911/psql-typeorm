
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from '../../entities/Client';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const {
        first_name,
        last_name,
        email,
        card_number,
        balance,
    } = req.body;
    const clientRepository = getRepository(Client);
    try {
        const client = await clientRepository.create({
            first_name,
            last_name,
            email,
            card_number,
            balance,
        });
        await clientRepository.save(client);
        const customSuccess = CustomSuccess('Client successfully created.', client);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};