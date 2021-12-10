import { Router } from 'express';

import bankers from './bankers';
import clients from './clients';
import transactions from './transactions';

const router = Router();

router.use('/clients', clients);
router.use('/bankers', bankers);
router.use('/transactions', transactions);

export default router;
