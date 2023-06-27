//
import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha_gerada');
const qtdCaracteres = document.querySelector('.qtd_caracteres');
const chkMaiusculas = document.querySelector('.chk_maiusculas');
const chkMinusculas = document.querySelector('.chk_minusculas');
const chkNumeros = document.querySelector('.chk_numeros');
const chkSimbolos = document.querySelector('.chk_simbolos');
const gerarSenha = document.querySelector('.gerar_senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado.';
}