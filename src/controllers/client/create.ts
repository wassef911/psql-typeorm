
import { Request, Response, NextFunction } from 'express';

import { ClientService } from '../../services/Client.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const clientServiceInstance = new ClientService();
    try {
        const client = await clientServiceInstance.create(req.body)
        const customSuccess = CustomSuccess('Client successfully created.', client);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};