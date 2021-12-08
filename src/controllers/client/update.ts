
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
        const client = await clientRepository.findOne(id);

        if (client) {


            console.log("found it");

        }
        else throw new Error("Client not found.")

        const customSuccess = CustomSuccess('User data.', client);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
