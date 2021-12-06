import dotenv = require('dotenv');
import express, { application } from 'express';
import { createConnection } from 'typeorm';

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
        app.listen(PORT, () => {
            console.log("server running on " + PORT);
        })
    } catch (err) {
        console.log(err);
    }
})();
