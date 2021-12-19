
import { Request, Response, NextFunction } from 'express';

import { BankerService } from '../../services/Banker.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const bankerServiceInstance = new BankerService();
    try {
        const banker = await bankerServiceInstance.create(req.body);
        const customSuccess = CustomSuccess('Banker successfully created.', banker);
        return res.status(201).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};