require('dotenv').config();
import { createConnection } from "typeorm";
import { Banker } from "./entities/banker";
import { Client } from "./entities/client";
(async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: process.env.PASS,
            database: 'test',
            entities: [Client, Banker],
            synchronize: true
        });
    } catch (err) {
        console.log(err);
    }
})();