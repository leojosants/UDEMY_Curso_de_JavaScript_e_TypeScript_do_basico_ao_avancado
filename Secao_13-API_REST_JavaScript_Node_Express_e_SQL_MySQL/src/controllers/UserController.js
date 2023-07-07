import User from '../models/User';

class UserController {
  // Store/create: cria um novo usuário -> POST
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index: lista todos os usuários -> GET
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show: exibe um usuário -> GET
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update: atualiza um usuário -> PATCH OU PUT
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['ID não enviado!'] });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ['USUÁRIO não existe!'] });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete: deleta um usuário -> DELETE
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['ID não enviado!'] });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ['USUÁRIO não existe!'] });
      }
      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
