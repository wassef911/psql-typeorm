import dotenv = require('dotenv');
import { createConnection } from 'typeorm';

export const establishConnection = async (ENTITIES) => {
    dotenv.config();
    await createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || '',
        database: process.env.POSTGRES_DATABASE || 'test',
        entities: ENTITIES,
        synchronize: true,
    });
}
