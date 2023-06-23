//
(function () {

    const fullName = ['Leonardo', 'José', 'de', 'Oliveira', 'Santos'];

    const newName = fullName.join(' '); // converte array em string

    console.log('fullName', fullName);
    console.log('newName', newName);

})();

/* (function () {

    // const fullName = 'Leonardo José de Oliveira Santos';

    // const newName = fullName.split(' '); // converte string em array

    // console.log('fullName', fullName);
    // console.log('newName', newName);

// })();
*/

/* (function () {

//     const names = ['COMEÇO', 'Eduardo', 'Maria', 'João', 'FINAL'];
//     const newNames = names.slice(1, 3);

//     console.log('names', names);
//     console.log('newNames', newNames);

//     // names.push('FUI ADICIONADO AQUI'); // Adiciona no final
//     // names.unshift('FUI ADICIONADO AQUI'); // Adiciona no início, ATENÇÃO AO USAR, POIS DESLOCA TODOS OS INDICES
//     // const elementRemovedFinal = names.pop()
//     // const elementRemovedStart = names.shift()
//     // console.log(`Elemento removido: ${elementRemovedFinal}`);
//     // console.log(`Elemento removido: ${elementRemovedStart}`);
//     // console.log(`Total de índice(s): ${names.length}`);
//     // console.log('Total de índice(s):', names);
// })();
*/

/* (function () {

    // const names = ['Eduardo', 'Maria', 'João'];
    // const copyOfNames = [...names]; // passagem de valores por referencia, (é cópia) toda alteração não afeta ambos
    // const referenceOfNames = names; // passagem de valores por referencia (não é cópia), toda alteração afeta ambos

    // referenceOfNames.pop();

    // console.log('names', names);
    // console.log('referenceOfNames', referenceOfNames);
    // console.log('copyOfNames', copyOfNames);

// })();
*/

/* (function () {

//     // const nomes = ['Eduardo', 'Maria', 'João'];
//     const nomes = new Array('Eduardo', 'Maria', 'João');

//     nomes[2] = 'João';
//     delete nomes[2];

//     console.log(nomes);

// })();
*/