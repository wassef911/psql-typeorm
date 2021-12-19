
import { getRepository } from 'typeorm';

import { Client } from '../entities/Client';

import { GenericService } from './Generic.service';


/**
  * @description Create an instance of ClientService to interact with the repository...
  */
export class ClientService extends GenericService<Client>{

    repository;
    constructor() {
        super();
        this.repository = getRepository(Client);
    }

    create = async (clientToAdd: Client): Promise<Client> => {
        const client = await this.repository.create(clientToAdd);
        return await this.repository.save(client);
    }

    list = async (page: number, take: number): Promise<Client[]> => {
        return await this.repository.find({ take, skip: take * (page - 1) });
    }

    show = async (id: number): Promise<Client> => {
        return this.repository.findOne(id);
    }

    update = async (clientToUpdate: Client): Promise<Client> => {
        return await this.repository.save(clientToUpdate);
    }

    destroy = (id: number) => {
        this.repository.delete(id);
    }

}