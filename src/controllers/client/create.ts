
import { Request, Response, NextFunction } from 'express';

import { ClientService } from '../../services/Client.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const ClientServiceInstance = new ClientService();
    const {
        first_name,
        last_name,
        email,
        card_number,
        balance,
        is_active,
        additional_info,
        family_members,
        created_at,
        updated_at,
    } = req.body;
    try {
        const client = ClientServiceInstance.create({
            id: null,
            first_name,
            last_name,
            email,
            card_number,
            balance,
            is_active,
            additional_info,
            family_members,
            created_at,
            updated_at,
        })
        const customSuccess = CustomSuccess('Client successfully created.', client);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};