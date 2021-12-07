import dotenv = require('dotenv');
import express from 'express';
import { createConnection } from 'typeorm';

import { createClientRouter } from './routes/create_client';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transactions } from './entities/Transactions';

const ENTITIES = [Client, Banker, Transactions];
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
        app.listen(PORT, () => {
            console.log("server running on " + PORT);
        });
    } catch (err) {
        console.log(err);
    }
})();
