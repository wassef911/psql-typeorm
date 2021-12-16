import fs from 'fs';
import { AddressInfo } from 'net'
import path from 'path';

import dotenv = require('dotenv');
import express from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';

import { establishConnection } from 'config';

import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transactions';
import routes from './routes';

const ENTITIES = [Client, Banker, Transaction];
const PORT = process.env.PORT || 3000;
const app = express();

try {
    establishConnection(ENTITIES).then(() => {
        app.use(express.json())
        const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), {
            flags: 'a',
        });
        app.use(morgan('combined', { stream: accessLogStream }));
        app.use('/', routes);

        const listener = app.listen(PORT, () => {
            const { address } = listener.address() as AddressInfo
            console.log("server running : http://%s:%s", address, PORT)
        });
    })

} catch (err) {
    console.log(err);
}
