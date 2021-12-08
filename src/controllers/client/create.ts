
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { CustomError } from '../../utils/customError';
import { Client } from '../../entities/Client';

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
        res.customSuccess(201, 'Client successfully created.', client);
    } catch (err) {
        const customError = new CustomError(404, err.message);
        return next(customError);
    }
};
