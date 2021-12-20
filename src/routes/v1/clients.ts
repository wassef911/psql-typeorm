import { Router } from 'express';

import { list, show, create, update, destroy, getTransactions } from '../../controllers/client';

const router = Router();


router.get('/', list);

router.get('/:id([0-9]+)', show);

router.get('/:id([0-9]+/transactions)', getTransactions);

router.post('/', create);

router.put('/:id([0-9]+)', update);

router.delete('/:id([0-9]+)', destroy);



export default router;
