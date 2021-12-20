import { Router } from 'express';

import { list, show, create, update, destroy, connectTo } from '../../controllers/banker';

const router = Router();


router.get('/', list);

router.get('/:id([0-9]+)', show);

router.post('/', create);

router.post('/:id([0-9]+)/id_client/:id([0-9]+)', connectTo);

router.put('/:id([0-9]+)', update);

router.delete('/:id([0-9]+)', destroy);



export default router;
