
import { getRepository } from 'typeorm';

export class GenericService {
    /**
      * @description Create an instance of T
      */
    repository;
    constructor(obj) {
        // Create instance of Data Access layer using our desired model
        this.repository = getRepository(obj);
    }

    /**
     * @param OBJECT {object} Object containing all required fields to
     * create OBJECT
     * @returns {Promise}
     */
    async create(OBJECT) {
        const result = await this.repository.create(OBJECT);
        return await this.repository.save(result);
    }
}