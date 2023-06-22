// Declaração de função (Function hoistin) - a chamada pode ser feita antes ou depois da declaração.
falaOi();

function falaOi() { console.log('Oi!'); }

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function () { console.log('Sou um dado.'); };

function receberDado(funcao) {
    console.log('Executando a função recebida por parâmetro!');
    funcao();
}
receberDado(souUmDado);

// Arrow function
const funcaoArrow = () => { console.log('Sou uma Arrow Function.'); };
funcaoArrow();

// Dentro de um um ojeto
const obj = {
    falar() { console.log('Estou falando...'); },
};

obj.falar();