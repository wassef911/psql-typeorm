
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from '../../entities/Client';
import { Transaction } from '../../entities/Transactions';
import { TransactionType } from '../../entities/Transactions';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const { client_id } = req.params;
    const { type, amount } = req.body;
    const clientRepository = getRepository(Client);
    try {
        const client = await clientRepository.findOne(client_id)
        if (!client) throw new Error("Client not found.")
        const transactionRepository = getRepository(Transaction);
        const transaction = await transactionRepository.create({
            amount,
            type,
            client
        });
        client.balance = (type === TransactionType.DEPOSIT) ? client.balance + amount : client.balance - amount;
        await transactionRepository.save(transaction);
        await clientRepository.save(client)
        const customSuccess = CustomSuccess('Transaction successfully recorded.', transaction);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};