
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/customError';
import { Banker } from '../../entities/Banker';
import { CustomSuccess } from '../../utils/customSuccess';

export const show = async (req: Request, res: Response, next: NextFunction) => {
    const bankerRepository = getRepository(Banker);
    const { id } = req.params;
    try {
        const banker = await bankerRepository.findOne(id);
        if (!banker) throw new Error("Banker not found.")
        const customSuccess = CustomSuccess('Banker data.', banker);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
