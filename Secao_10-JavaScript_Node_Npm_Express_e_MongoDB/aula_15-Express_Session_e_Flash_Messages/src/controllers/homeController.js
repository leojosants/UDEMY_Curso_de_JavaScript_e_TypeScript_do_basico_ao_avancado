//
exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Leonardo', logado: true };
    // console.log(req.session.usuario);

    console.log(req.flash('info'), req.flash('error'), req.flash('success'));

    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};