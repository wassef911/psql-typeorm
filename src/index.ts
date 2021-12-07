import dotenv = require('dotenv');
import express from 'express';
import { createConnection } from 'typeorm';

import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transactions';
import { createClientRouter } from './routes/create_client';
import { createBankerRouter } from './routes/create_banker';


const ENTITIES = [Client, Banker, Transaction];
const PORT = process.env.PORT || 8080;
const app = express();

(async () => {
    dotenv.config();
    try {
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
        app.use(express.json())
        app.use(createClientRouter)
        app.use(createBankerRouter)
        app.listen(PORT, () => {
            console.log("server running on " + PORT);
        });
    } catch (err) {
        console.log(err);
    }
})();
