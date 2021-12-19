
import { Request, Response, NextFunction } from 'express';

import { BankerService } from '../../services/Banker.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
    const bankerServiceInstance = new BankerService();
    const id = parseInt(req.params.id);
    try {
        const banker = await bankerServiceInstance.show(id);
        if (!banker) throw new Error("Banker not found.");
        bankerServiceInstance.destroy(id)
        const customSuccess = CustomSuccess('Banker successfully deleted.', banker);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
