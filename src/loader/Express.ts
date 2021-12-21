import fs from 'fs';
import { AddressInfo } from 'net'
import path from 'path';

import express from 'express';
import morgan from 'morgan';

import routes from '../routes';
const PORT = process.env.PORT || 3000;
const app = express();

export class ExpressLoader {
    constructor() {
        app.use(express.json())
        const accessLogStream = fs.createWriteStream(path.join(__dirname, '../../log/access.log'), {
            flags: 'a',
        });
        app.use(morgan('combined', { stream: accessLogStream }));
        app.use('/', routes);
        const listener = app.listen(PORT, () => {
            const { address } = listener.address() as AddressInfo
            console.log("server running : http://%s:%s", address, PORT)
        });
    }
}