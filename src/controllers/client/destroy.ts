
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { CustomError } from '../../utils/customError';
import { Client } from '../../entities/Client';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = getRepository(Client);
    const { id } = req.params;

    try {
        const client = await clientRepository.findOne({ where: { id } });
        if (!client) {
            throw new Error("client not found.")
        }
        clientRepository.delete(id)
        res.customSuccess(201, 'User successfully deleted.', client);
    } catch (err) {
        const customError = new CustomError(404, err.message);
        return next(customError);
    }
};
