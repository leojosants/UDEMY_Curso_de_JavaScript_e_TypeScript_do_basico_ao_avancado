//
const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Título de teste.',
    descricao: 'Descrição de teste.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'Leonardo', logado: true }
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};