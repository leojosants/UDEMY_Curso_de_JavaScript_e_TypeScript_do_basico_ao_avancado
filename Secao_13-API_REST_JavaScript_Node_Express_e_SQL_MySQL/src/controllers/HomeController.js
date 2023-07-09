import Aluno from '../models/AlunoModel';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Leonardo',
      sobrenome: 'Santos',
      email: 'leonardojosantos@gmail.com',
      idade: 39,
      peso: 75,
      altura: 1.70,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
