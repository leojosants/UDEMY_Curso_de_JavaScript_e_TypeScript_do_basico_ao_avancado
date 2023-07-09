import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['--> É necessário fazer LOGIN!'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({ errors: ['--> USUÁRIO inválido!'] });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    // console.log(e);
    return res.status(401).json({ errors: ['--> TOKEN expirado ou inválido!'] });
  }
};
