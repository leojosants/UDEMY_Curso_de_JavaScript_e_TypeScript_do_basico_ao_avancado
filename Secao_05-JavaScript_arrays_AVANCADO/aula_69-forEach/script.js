
/*
    O método forEach é uma ação de iteração que executa uma função para cada elemento, seja de arrays simples ou arrays de objetos. Ele também pode ser usado em Mapas e Conjuntos na matriz de dados.
*/

(function () {

    const arrayOne = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    let sumNumbers = 0;

    arrayOne.forEach(element => sumNumbers += element);

    console.log('\nSoma dos números:', sumNumbers);

})();