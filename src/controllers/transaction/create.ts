
import { Request, Response, NextFunction } from 'express';

import { TransactionType } from '../../entities/Transaction';
import { ClientService } from '../../services/Client.service';
import { TransactionService } from '../../services/Transaction.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const transactionServiceInstance = new TransactionService();
    const clientServiceInstance = new ClientService();
    const { client_id } = req.params;
    const { type, amount } = req.body;
    try {
        console.log(parseInt(client_id), req.params);
        const client = await clientServiceInstance.show(parseInt(client_id))
        if (!client) throw new Error("Client not found.")
        const transaction = await transactionServiceInstance.create({
            ...req.body,
            client
        });
        client.balance = (type === TransactionType.DEPOSIT) ? client.balance + amount : client.balance - amount;
        await clientServiceInstance.update(client);
        const customSuccess = CustomSuccess('Transaction successfully recorded.', transaction);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};