
import { Request, Response, NextFunction } from 'express';

import { TransactionService } from '../../services/Transaction.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const show = async (req: Request, res: Response, next: NextFunction) => {
    const transactionServiceInstance = new TransactionService();
    const id = parseInt(req.params.id);
    try {
        const transaction = await transactionServiceInstance.show(id);
        if (!transaction) throw new Error("Transaction not found.")
        const customSuccess = CustomSuccess('Client data.', transaction);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
