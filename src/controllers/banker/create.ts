
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Banker } from '../../entities/Banker';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const {
        first_name,
        last_name,
        email,
        card_number,
        employee_number,
    } = req.body;
    const bankerRepository = getRepository(Banker);
    try {
        const banker = await bankerRepository.create({
            first_name,
            last_name,
            email,
            card_number,
            employee_number,
        });
        await bankerRepository.save(banker);
        const customSuccess = CustomSuccess('Banker successfully created.', banker);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};