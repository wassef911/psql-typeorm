
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Banker } from '../../entities/Banker';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const update = async (req: Request, res: Response, next: NextFunction) => {
    const bankerRepository = getRepository(Banker);
    const {
        first_name,
        last_name,
        email,
        card_number,
        employee_number,
    } = req.body;
    const { id } = req.params;
    try {
        let banker = await bankerRepository.findOne(id);
        if (!banker) throw new Error("Banker not found.")
        const bankerUpdated = await bankerRepository.save({
            ...banker,
            first_name,
            last_name,
            email,
            card_number,
            employee_number,
        });
        const customSuccess = CustomSuccess('Banker data updated.', bankerUpdated);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
