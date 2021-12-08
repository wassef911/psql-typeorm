import { Router } from 'express';

import { list, show, create, update, destroy } from '../../controllers/client';

const router = Router();

router.get('/:id([0-9]+)', show);

router.get('/', list);

router.post('/', create);

router.patch('/:id([0-9]+)', update);

router.delete('/:id([0-9]+)', destroy);

export default router;
