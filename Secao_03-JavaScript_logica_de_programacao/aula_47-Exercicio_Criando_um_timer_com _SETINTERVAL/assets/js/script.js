//
function relogio() {
    const relogio = document.querySelector('.relogio');
    const pausar = document.querySelector('.pausar');

    let segundos = 0;
    let timer;

    function iniciaRelogio() {

        timer = setInterval(() => {

            segundos++;

            relogio.innerHTML = criaHoraDosSegundos(segundos);

        }, 1000);

        return timer;
    }

    function criaHoraDosSegundos(segundos) {

        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR',
            {
                hour12: false,
                timeZone: 'GMT',
            },
        );
    }

    document.addEventListener('click', (e) => {

        const elementoClicado = e.target;

        if (elementoClicado.classList.contains('iniciar')) {
            clearInterval(timer)

            iniciaRelogio();

            relogio.classList.remove('pausado');
            pausar.classList.remove('pausado');
        }

        if (elementoClicado.classList.contains('pausar')) {

            clearInterval(timer);

            pausar.classList.add('pausado');
            relogio.classList.add('pausado');
        }

        if (elementoClicado.classList.contains('zerar')) {
            clearInterval(timer);

            pausar.classList.remove('pausado');

            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';

            segundos = 0;
        }
    });
}

relogio();