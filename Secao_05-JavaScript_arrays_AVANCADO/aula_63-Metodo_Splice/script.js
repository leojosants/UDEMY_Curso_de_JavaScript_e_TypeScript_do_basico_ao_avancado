// 
(function () {

    /*
        splice(primeiro_argumento, segundo_argumento, terceito_argumento)
        splice(primeiro_argumento, segundo_argumento)
        - Primeiro argumento: number -> índice a executar o processo
        - Segundo  argumento: number -> 0 ou 1 --> 0: adiciona / 1: deleta 2: substitui
        - Terceiro argumento: elementos a serem adicionados ou removidos conforme o segundo argumento.
          - Se removido - subistitui / - Se não removido - adiciona

        - retona o elemento removido em forma de array
    */

    const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    console.log(name);
    const elementRemoved = name.splice(0, 0, 'Josué'); // simular o unshift, adiciona no inicio
    console.log(name);
    console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // console.log(name);
    // const elementRemoved = name.splice(name.length, 0, 'Francisco'); // simular o push, adiciona no final
    // console.log(name);
    // console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // console.log(name);
    // const elementRemoved = name.splice(0, 1); // simular o shift, removendo do inicio
    // console.log(name);
    // console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // console.log(name);
    // const elementRemoved = name.splice(-1, 1); // simular o pop, removendo do final
    // console.log(name);
    // console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // const elementRemoved = name.splice(3, 2, 'Mara', 'Honofre');
    // console.log(name);
    // console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // const elementRemoved = name.splice(3, 1, 'Mara'); // adiciona e remove
    // // console.log(name);
    // // console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // const elementRemoved = name.splice(3, 0, 'Mara'); // adiciona e não remove
    // console.log(name);
    // console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // const elementRemoved = name.splice(-2, Number.MAX_VALUE); // comeca no -2 e executa até o fim
    // console.log(name);
    // console.log(elementRemoved);

    // const name = ['Leonardo', 'João', 'Lucas', 'Abel', 'Maria'];
    // const elementRemoved = name.splice(4, 1);
    // console.log(name);
    // console.log(elementRemoved);

})();