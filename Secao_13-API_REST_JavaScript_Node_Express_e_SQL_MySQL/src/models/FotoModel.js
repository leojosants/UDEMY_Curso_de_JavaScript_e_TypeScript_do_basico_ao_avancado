import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app.Config';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: '--> Campo não pode ficar VAZIO!',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: '--> Campo não pode ficar VAZIO!',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'fotos',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(
      models.Aluno,
      { foreignKey: 'aluno_id' },
    );
  }
}
