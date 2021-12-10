import { Router } from 'express';

import { list, show, create } from '../../controllers/transaction';

const router = Router();

router.post('/', create);

router.get('/', list);

router.get('/:id([0-9]+)', show);

export default router;
