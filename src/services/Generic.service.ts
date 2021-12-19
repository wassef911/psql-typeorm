

export abstract class GenericService<T>{
    abstract repository;

    /**
     * @param entityToAdd Object containing all required fields to create entity
     * @returns {Promise}
     */
    protected abstract create(entityToAdd: T): Promise<T>;

    /**
     * 
     * @param page number of pages to skip 
     * @param take number of entities instances per page 
     * @returns {Promise}
     */
    protected abstract list(page: number, take: number): Promise<T[]>;

    /**
     * 
     * @param id entity instance identifier
     * @returns {Promise}
     */
    protected abstract show(id: number): Promise<T>;

    /**
     * 
     * @param id  entity instance identifier
     * @param entityToUpdate Object containing all required fields to update entity
     * @returns {Promise}
     */
    protected abstract update(entityToUpdate: T): Promise<T>;

    /**
     * 
     * @param id  entity instance identifier
     */
    protected abstract destroy(id: number);
}