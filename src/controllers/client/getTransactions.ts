
import { Request, Response, NextFunction } from 'express';

import { ClientService } from '../../services/Client.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const getTransactions = async (req: Request, res: Response, next: NextFunction) => {
    const clientServiceInstance = new ClientService();
    const id = parseInt(req.params.id);
    try {
        const transactions = await clientServiceInstance.getTransactions(id);
        const customSuccess = CustomSuccess('Client s transactions.', transactions);
        return res.status(200).send(customSuccess);
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
