import { Router } from 'express';

import { list, show, create, update, destroy, connectTo } from '../../controllers/banker';

const router = Router();

router.post('/', create);

router.get('/', list);

router.put('/:id([0-9]+)', update);

router.get('/:id([0-9]+)', show);

router.delete('/:id([0-9]+)', destroy);

router.post('/:id([0-9]+)/id_client/:id([0-9]+)', connectTo);


export default router;
