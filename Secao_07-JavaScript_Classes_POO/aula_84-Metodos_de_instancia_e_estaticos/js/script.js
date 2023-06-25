// 
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        if (this.volume === 2) {
            console.log('Volume já se encontra no máximo!');
            return;
        }

        this.volume += 2;
    }

    diminuirVolume() {
        if (this.volume === 0) {
            console.log('Volume já se encontra no mínimo!');
            return;
        }

        this.volume -= 2;
    }

    static atualizarSoftware() {
        console.log('Atualizando software...');
    }
}

const cr1 = new ControleRemoto('LG');
console.log(cr1);

ControleRemoto.atualizarSoftware();