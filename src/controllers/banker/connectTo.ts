import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Banker } from '../../entities/Banker';
import { Client } from '../../entities/Client';
import { BankerService } from '../../services/Banker.service';
import { ClientService } from '../../services/Client.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const connectTo = async (req: Request, res: Response, next: NextFunction) => {
    const bankerServiceInstance = new BankerService();
    const clientServiceInstance = new ClientService();
    const id_banker = parseInt(req.params.id_banker);
    const id_client = parseInt(req.params.id_client);

    try {
        const banker = await bankerServiceInstance.show(id_banker);
        const client = await clientServiceInstance.show(id_client);
        if (!banker || !client) throw new Error("Banker or Client not found.");
        banker.clients = [...banker.clients, client];
        await bankerServiceInstance.update(banker);
        const customSuccess = CustomSuccess('Banker connected to client.', banker);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
