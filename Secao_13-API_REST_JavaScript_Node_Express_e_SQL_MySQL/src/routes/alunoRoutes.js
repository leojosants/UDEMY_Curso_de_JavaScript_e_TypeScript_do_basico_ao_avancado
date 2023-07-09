import { Router } from 'express';
import alunoRoutes from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoRoutes.index);

export default router;
