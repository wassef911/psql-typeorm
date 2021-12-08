
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { CustomError } from '../../utils/customError';
import { Client } from '../../entities/Client';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = getRepository(Client);
    try {
        const clients = await clientRepository.find();
        res.customSuccess(200, 'User successfully deleted.', clients);
    } catch (err) {
        const customError = new CustomError(404, err.message);
        return next(customError);
    }
};
