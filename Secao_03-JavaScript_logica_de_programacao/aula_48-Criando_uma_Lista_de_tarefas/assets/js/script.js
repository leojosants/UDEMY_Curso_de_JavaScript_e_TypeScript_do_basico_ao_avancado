// 
function tarefas() {
    const inputTarefa = document.querySelector('.input_tarefa');
    const btnTarefa = document.querySelector('.btn_tarefa');
    const tarefas = document.querySelector('.tarefas');

    const salvarTarefas = () => {

        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {

            let tarefaTexto = tarefa.innerText;

            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();

            listaDeTarefas.push(tarefaTexto);
        }

        const tarefaJSON = JSON.stringify(listaDeTarefas);

        localStorage.setItem('tarefas', tarefaJSON);
    };

    const criarBotaoApagar = (li) => {

        li.innerText += '';

        const botaoApagar = document.createElement('button');

        botaoApagar.innerText = 'Apagar';
        botaoApagar.style.marginLeft = '10px'
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'apagar tarefa');

        li.appendChild(botaoApagar);

    };

    const criarLi = () => {

        const li = document.createElement('li');

        return li;
    };

    const criarTarefa = (textoInput) => {

        const li = criarLi();

        li.innerText = textoInput;

        tarefas.appendChild(li);

        limparInput();

        criarBotaoApagar(li);

        salvarTarefas();
    };

    const limparInput = () => {
        inputTarefa.value = '';
        inputTarefa.focus();
    };

    const adicionarTarefasSalvas = () => {

        const tarefas = localStorage.getItem('tarefas');
        const ListaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of ListaDeTarefas) {
            criarTarefa(tarefa);
        }
    };

    adicionarTarefasSalvas();

    document.addEventListener('click', (e) => {

        const elemento = e.target;

        if (elemento.classList.contains('apagar')) {

            elemento.parentElement.remove();

            salvarTarefas();
        }
    });

    inputTarefa.addEventListener('keypress', (e) => {

        if (e.keyCode === 13) {

            if (!inputTarefa.value) return;

            criarTarefa(inputTarefa.value);

            limparInput();
        }
    });

    btnTarefa.addEventListener('click', () => {

        if (!inputTarefa.value) return;

        criarTarefa(inputTarefa.value);
    });
}

tarefas();