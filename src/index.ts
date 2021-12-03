require('dotenv').config();
import { createConnection } from "typeorm";

(async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: process.env.PASS,
            database: 'test',
        });
    } catch (err) {
        console.log(err);
    }
})();