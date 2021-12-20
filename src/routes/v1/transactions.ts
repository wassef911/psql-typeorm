import { Router } from 'express';

import { list, show, create } from '../../controllers/transaction';

const router = Router();

router.get('/', list);

router.get('/:id([0-9]+)', show);

router.post('/:client_id([0-9]+)', create);

export default router;
