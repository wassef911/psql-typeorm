import { Router } from 'express';

import clients from './clients';

const router = Router();

router.use('/clients', clients);

export default router;
