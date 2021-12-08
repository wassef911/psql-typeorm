
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/customError';
import { Client } from '../../entities/Client';
import { CustomSuccess } from '../../utils/customSuccess';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = getRepository(Client);
    try {
        const clients = await clientRepository.find();
        const customSuccess = CustomSuccess('User list.', clients);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
