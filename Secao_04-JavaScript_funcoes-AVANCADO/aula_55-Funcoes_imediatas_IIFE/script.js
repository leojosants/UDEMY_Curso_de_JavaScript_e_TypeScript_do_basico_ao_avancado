/*
    Immediately invoked function expression
    - Uma expressão de função imediatamente invocada é um idioma de linguagem de programação que produz um escopo léxico usando o escopo de função. 
*/

((idade, peso, altura) => {
    const sobrenome = 'Santos';
    criaNome = (nome) => nome + ' ' + sobrenome;
    falaNome = () => console.log(criaNome('Leonardo'));
    falaOutrosDados = () => console.log(idade, peso, altura);

    falaNome();
    falaOutrosDados();
})(39, 75, 1.70);