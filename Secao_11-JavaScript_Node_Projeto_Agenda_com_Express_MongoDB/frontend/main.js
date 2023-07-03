// 
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login';

const login = new Login('.form_login');
const cadastro = new Login('.form_cadastro');

login.init();
cadastro.init();