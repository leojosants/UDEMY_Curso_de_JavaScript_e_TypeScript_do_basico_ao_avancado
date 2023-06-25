// 
const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

novasPessoas.delete(2);
console.log(novasPessoas);

// for (const valor of novasPessoas.values()) {
//     console.log(valor);
// }

// for (const chave of novasPessoas.keys()) {
//     console.log(chave);
// }

// for (const pessoas of novasPessoas) {
//     console.log(pessoas);
// }

// for (const [identifier, { id, nome }] of novasPessoas) {
//     console.log(identifier, id, nome);
// }