
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/customError';
import { Client } from '../../entities/Client';
import { CustomSuccess } from '../../utils/customSuccess';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = getRepository(Client);
    const { id } = req.params;

    try {
        const client = await clientRepository.findOne({ where: { id } });
        if (!client) {
            throw new Error("client not found.")
        }
        clientRepository.delete(id)

        const customSuccess = CustomSuccess('User successfully deleted.', client);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
