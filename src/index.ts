
import 'module-alias/register';

import dotenv = require('dotenv');

import { establishDatabaseConnection } from './config';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transaction';
import { ExpressLoader } from './loader';

const ENTITIES = [Client, Banker, Transaction];

try {
    dotenv.config();
    establishDatabaseConnection(ENTITIES).then(() => new ExpressLoader())
} catch (err) {
    console.log(err);
}
