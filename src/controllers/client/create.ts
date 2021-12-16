
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { ClientService } from 'services/Client.service';

import { Client } from '../../entities/Client';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

const ClientServiceInstance = new ClientService();
export const create = async (req: Request, res: Response, next: NextFunction) => {
    const {
        first_name,
        last_name,
        email,
        card_number,
        balance,
    } = req.body;
    try {
        const client = ClientServiceInstance.create({
            first_name,
            last_name,
            email,
            card_number,
            balance,
        })
        const customSuccess = CustomSuccess('Client successfully created.', client);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};