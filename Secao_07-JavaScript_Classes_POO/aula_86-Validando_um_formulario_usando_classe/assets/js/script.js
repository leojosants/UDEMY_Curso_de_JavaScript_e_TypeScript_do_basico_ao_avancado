// 
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir_senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos <strong>Senha e Repetir Senha</strong> precisam ser iguais!')
            this.criaErro(repetirSenha, 'Campos <strong>Senha e Repetir Senha</strong> precisam ser iguais!')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, '<strong>Senha</strong> precisa estar em <strong>6 e 12 caracteres.</strong>')
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for (let erroText of this.formulario.querySelectorAll('.error_text')) {
            erroText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo <strong>${label}</strong> não pode estar em <strong>branco!</strong>`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }

        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, '<strong>Usuário</strong> deverá ter entre <strong>3 e 12 caracteres.</strong>');
            valid = false;
        }

        if (!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo, '<strong>Usuário</strong> só poderá conter <strong>letras e/ou números.</strong>');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, '<strong>CPF inválido</strong>');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error_text');
        campo.insertAdjacentElement('afterend', div);

    }
}

const valida = new ValidaFormulario();