import { Router } from 'express';
import alunoRoutes from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoRoutes.index);
router.post('/', loginRequired, alunoRoutes.store);
router.put('/:id', loginRequired, alunoRoutes.update);
router.get('/:id', alunoRoutes.show);
router.delete('/:id', loginRequired, alunoRoutes.delete);

export default router;
