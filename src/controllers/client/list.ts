
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from '../../entities/Client';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = getRepository(Client);
    try {
        const clients = await clientRepository.find();
        const customSuccess = CustomSuccess('Clients list.', clients);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
