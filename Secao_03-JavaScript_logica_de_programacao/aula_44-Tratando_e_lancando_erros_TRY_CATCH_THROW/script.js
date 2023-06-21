// 

function soma(x, y) {

    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        throw new Error('"x" e "y" precisam ser números!');
    }

    return y + y;
}

try {
    console.log(soma(2, '3'));
}
catch (err) {
    // console.log(err);
    console.log('Usuário, o(s) valore(s) de entrada não pode(m) ser diferente(s) de números!');
}