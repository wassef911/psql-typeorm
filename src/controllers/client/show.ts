
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from '../../entities/Client';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const show = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = getRepository(Client);
    const { id } = req.params;
    try {
        const client = await clientRepository.findOne(id);
        if (!client) throw new Error("Client not found.")
        const customSuccess = CustomSuccess('Client data.', client);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
