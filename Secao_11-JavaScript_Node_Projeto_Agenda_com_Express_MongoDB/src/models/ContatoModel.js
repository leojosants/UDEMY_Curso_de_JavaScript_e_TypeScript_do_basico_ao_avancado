// 
const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: false, default: '' },
    email: { type: String, require: false, default: '' },
    telefone: { type: String, require: false, default: '' },
    criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.erros = [];
    this.contato = null;
}

Contato.prototype.register = function () {
    this.valida();
}

Contato.prototype.valida = function () {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!')
}

Contato.prototype.cleanUp = function () {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    };
}

module.exports = Contato;