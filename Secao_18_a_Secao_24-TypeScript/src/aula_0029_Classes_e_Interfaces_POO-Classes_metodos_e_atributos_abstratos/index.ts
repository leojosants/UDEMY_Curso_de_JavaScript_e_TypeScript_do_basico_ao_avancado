export abstract class Character {

  protected abstract emoji: string;

  constructor(
    // eslint-disable-next-line no-unused-vars
    protected name: string,

    // eslint-disable-next-line no-unused-vars
    protected attack: number,

    // eslint-disable-next-line no-unused-vars
    protected life: number,
  ) { }

  public attacker(charcter: Character): void {
    this.staff();
    charcter.loseLife(this.attack);
  }

  public loseLife(strikeForce: number): void {
    // this.life -= strikeForce;
    console.log(`${this.emoji} ${this.name} recebendo ataque!\n\tTotal de vidas antes do ataque: ${this.life}\n\tTotal de vidas após ataque: ${this.life -= strikeForce}`);
  }

  public abstract staff(): void;
}

export class Warrior extends Character {

  protected emoji = '\u{1F9DD}';

  public staff(): void {
    console.log(this.emoji, 'Guerreira atacando!');
  }
}

export class Monster extends Character {

  protected emoji = '\u{1F9DF}';

  public staff(): void {
    console.log(this.emoji, 'Monstro atacando!');
  }
}

const warrior = new Warrior('Guerreira', 100, 1000);
const monster = new Monster('Monstro', 87, 1000);

warrior.attacker(monster);
console.log();

monster.attacker(warrior);
console.log();

warrior.attacker(monster);
console.log();

monster.attacker(warrior);
console.log();
