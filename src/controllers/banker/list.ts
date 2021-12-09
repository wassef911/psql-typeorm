
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/customError';
import { Banker } from '../../entities/Banker';
import { CustomSuccess } from '../../utils/customSuccess';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const bankerRepository = getRepository(Banker);
    try {
        const bankers = await bankerRepository.find();
        const customSuccess = CustomSuccess('Bankers list.', bankers);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
