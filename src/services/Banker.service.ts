
import { getRepository } from 'typeorm';

import { Banker } from '../entities/Banker';

import { GenericService } from './Generic.service';


/**
  * @description Create an instance of BankerService to interact with the repository...
  */
export class BankerService extends GenericService<Banker>{

    repository;
    constructor() {
        super();
        this.repository = getRepository(Banker);
    }

    create = async (bankerToAdd: Banker): Promise<Banker> => {
        const banker = await this.repository.create(bankerToAdd);
        return await this.repository.save(banker);
    }

    list = async (page: number, take: number): Promise<Banker[]> => {
        return await this.repository.find({ take, skip: take * (page - 1) });
    }

    show = async (id: number): Promise<Banker> => {
        return this.repository.findOne(id);
    }

    update = async (bankerToUpdate: Banker): Promise<Banker> => {
        return await this.repository.save(bankerToUpdate);
    }

    destroy = (id: number) => {
        this.repository.delete(id);
    }
}