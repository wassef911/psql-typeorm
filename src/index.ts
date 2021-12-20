import fs from 'fs';
import { AddressInfo } from 'net'
import path from 'path';

import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express'

import { establishConnection } from './config';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transaction';
import routes from './routes';
import * as swaggerDocument from './swagger.json'

const ENTITIES = [Client, Banker, Transaction];
const PORT = process.env.PORT || 3000;
const app = express();
const cssOptions = {
    customCss: `
    .swagger-ui .topbar { opacity:0 }`,
    customSiteTitle: "Poopcode APIs"
};

try {
    establishConnection(ENTITIES).then(() => {
        app.use(express.json())
        const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), {
            flags: 'a',
        });
        app.use(morgan('combined', { stream: accessLogStream }));
        app.use('/', routes);
        app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, cssOptions));
        const listener = app.listen(PORT, () => {
            const { address } = listener.address() as AddressInfo
            console.log("server running : http://%s:%s", address, PORT)
        });
    })
} catch (err) {
    console.log(err);
}
