
import { Request, Response, NextFunction } from 'express';

import { BankerService } from '../../services/Banker.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const bankerServiceInstance = new BankerService();
    const page = (+req.query.page);
    const perPage = (+req.query.perPage);
    try {
        const bankers = await bankerServiceInstance.list(page, perPage);
        const customSuccess = CustomSuccess('Bankers list.', bankers);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
