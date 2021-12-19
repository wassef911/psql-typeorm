
import { Request, Response, NextFunction } from 'express';

import { TransactionService } from '../../services/Transaction.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const transactionServiceInstance = new TransactionService();
    const page = (+req.query.page);
    const perPage = (+req.query.perPage);
    try {
        const transactions = await transactionServiceInstance.list(page, perPage);
        const customSuccess = CustomSuccess('Transactions list.', transactions);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
