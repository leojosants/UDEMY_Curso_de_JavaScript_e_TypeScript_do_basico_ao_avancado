import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: '--> Campo NOME deve ter entre 3 e 255 caracteres!',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: '--> Campo SOBRENOME deve ter entre 3 e 255 caracteres!',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: { msg: '--> E-MAIL inválido!' },
            isUnique(value, next) {
              Aluno.findOne({ where: { email: value } })
                .then((user) => {
                  if (user) {
                    return next('--> EMAIL já existe, tente outro!');
                  }
                  return next();
                })
                .catch((err) => next(err));
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: '--> IDADE precisa ser um número inteiro!',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: '--> PESO precisa ser um número inteiro ou de ponto flutuante!',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: '--> ALTURA precisa ser um número inteiro ou de ponto flutuante!',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
