import dotenv = require('dotenv');
import { createConnection } from 'typeorm';

import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transactions } from './entities/Transactions';

const ENTITIES = [Client, Banker, Transactions];

(async () => {
    dotenv.config();
    try {
        console.log(process.env.PASS, " fancy stuff! "); // lazy to right it  
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: process.env.PASS,
            database: 'test',
            entities: ENTITIES,
            synchronize: true,
        });
    } catch (err) {
        console.log(err);
    }
})();
