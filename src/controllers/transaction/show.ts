
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //to do
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
