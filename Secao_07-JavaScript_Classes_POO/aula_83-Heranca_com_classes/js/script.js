// 
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`Dispositivo ${this.nome} já está ligado!`);
            return;
        }

        console.log(`Dispositivo ${this.nome} foi ligado!`);
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`Dispositivo ${this.nome} já está desligado!`);
            return;
        }

        console.log(`Dispositivo ${this.nome} foi desligado!`);
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWiFi) {
        super(nome);
        this.temWiFi = temWiFi.slice(0, 1).toUpperCase();
    }

    ativarWiFi() {
        if (this.ligado === false) {
            console.log('Não é possível ativar essa funcionalidade, pois o aparelho está desligado!');
            return;
        }

        if (this.temWiFi === 'S') {
            console.log('Ativado WiFi!');
            return;
        };

        if (this.temWiFi === 'N') {
            console.log('Aparelho não possui essa funcionalidade!');
            return;
        }
    }

    desativarWiFi() {
        if (this.ligado === false) {
            console.log('Não é possível ativar essa funcionalidade, pois o aparelho está desligado!');
            return;
        }

        if (this.temWiFi === 'S') {
            console.log('Desativado WiFi!');
        };

        if (this.temWiFi === 'N') {
            console.log('Aparelho não possui essa funcionalidade!');
            return;
        }
    }
}

const t1 = new Tablet('Médio', 'não');
t1.desativarWiFi();

console.log(t1)