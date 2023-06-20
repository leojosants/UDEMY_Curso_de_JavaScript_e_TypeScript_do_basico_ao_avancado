// ? :

const pontuacaoUsuario = Math.floor(Math.random() * 2000);

const nivelUsuario = (pontuacaoUsuario >= 1000) ? 'Usuário VIP!' : 'Usuário COMUM!';

console.log(nivelUsuario);