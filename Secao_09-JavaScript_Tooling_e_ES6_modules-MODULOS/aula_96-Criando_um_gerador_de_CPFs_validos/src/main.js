import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function () {

    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf_gerado');

    cpfGerado.innerHTML = gera.geraNovoCPF();

})();