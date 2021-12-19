
import { Request, Response, NextFunction } from 'express';

import { ClientService } from '../../services/Client.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const clientServiceInstance = new ClientService();
    const page = (+req.query.page);
    const perPage = (+req.query.perPage);
    try {
        const clients = await clientServiceInstance.list(page, perPage);
        const customSuccess = CustomSuccess('Clients list.', clients);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
