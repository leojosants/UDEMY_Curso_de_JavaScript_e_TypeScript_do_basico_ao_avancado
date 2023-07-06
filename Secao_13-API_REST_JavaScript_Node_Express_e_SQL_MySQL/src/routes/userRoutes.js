// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
  index         ->  lista todos os usuários ->  GET
  delete        ->  deleta um usuário       ->  DELETE
  show          ->  exibe um usuário        ->  GET
  update        ->  atualiza um usuário     ->  PATCH OU PUT
  store/create  ->  cria um novo usuário    ->  POST
*/
