import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Júlia',
      sobrenome: 'Josué',
      email: 'juliajosues@gmail.com',
      idade: 39,
      peso: 75,
      altura: 1.70,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
