
import { getRepository } from 'typeorm';

import { Transaction } from '../entities/Transaction';

import { GenericService } from './Generic.service';


/**
  * @description Create an instance of TransactionService to interact with the repository...
  */
export class TransactionService extends GenericService<Transaction>{

    repository;
    constructor() {
        super();
        this.repository = getRepository(Transaction);
    }

    create = async (transactionToCreate: Transaction): Promise<Transaction> => {
        const transaction = await this.repository.create(transactionToCreate);
        return await this.repository.save(transaction);
    }

    list = async (page: number, take: number): Promise<Transaction[]> => {
        return await this.repository.find({ take, skip: take * (page - 1) });
    }

    show = async (id: number): Promise<Transaction> => {
        return this.repository.findOne(id);
    }

    /**
     * 
     * @description transactions are not updatable
     * @returns null
     */
    update = async (transactionToUpdate: Transaction) => {
        throw new Error("Transactions are not updatable. 😅");
    }
    /**
     * 
     * @description transactions are not deletable
     * @returns null
     */
    destroy = (id: number) => {
        throw new Error("Transactions are not deletable. 🧐");
    }
}