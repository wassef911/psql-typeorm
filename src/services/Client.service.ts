
import { getRepository } from 'typeorm';

import { Client } from '../entities/Client';
import { ClientInterface } from '../models/Client.inteface';


export class ClientService {
    /**
      * @description Create an instance of ClientService
      */
    clientRepository;
    constructor() {
        // Create instance of Data Access layer using our desired model
        this.clientRepository = getRepository(Client);
    }

    /**
     * @param client {object} Object containing all required fields to
     * create client
     * @returns {Promise}
     */
    async create(clientToAdd: ClientInterface) {
        const client = await this.clientRepository.create(clientToAdd);
        return await this.clientRepository.save(client);
    }
}