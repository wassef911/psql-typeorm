
import { getRepository } from 'typeorm';

import { Client } from '../entities/Client';

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
    async create(clientToAdd: ClientMutation) {
        const client = await this.clientRepository.create(clientToAdd);
        return await this.clientRepository.save(client);
    }
}


interface ClientMutation {
    first_name: string;
    last_name: string;
    email: string;
    card_number: number;
    balance: number;
}