type VotationOption = {
  numberOfVotes: number,
  option: string,
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  // eslint-disable-next-line no-unused-vars
  constructor(public details: string) { }

  get votationOption(): VotationOption[] {
    return this._votationOptions
  }

  addVotationsOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);

      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }

      console.log('Votação finalizada!\n');
    }
  }
}

const votation0 = new Votation('Qual sua linguagem de programação favorita?');
votation0.addVotationsOption({ option: 'JavaScript:', numberOfVotes: 0 });
votation0.addVotationsOption({ option: 'TypeScript:', numberOfVotes: 0 });
votation0.addVotationsOption({ option: '    Python:', numberOfVotes: 0 });

for (let i = 0; i < 10; i++) {
  votation0.vote(Math.floor(Math.random() * 3));
}

const votation1 = new Votation('Qual sua cor favorita?');
votation1.addVotationsOption({ option: 'Vermelho:', numberOfVotes: 0 });
votation1.addVotationsOption({ option: '   Verde:', numberOfVotes: 0 });
votation1.addVotationsOption({ option: '    Azul:', numberOfVotes: 0 });

for (let i = 0; i < 10; i++) {
  votation1.vote(Math.floor(Math.random() * 3));
}

const votationApp0 = new VotationApp();
votationApp0.addVotation(votation0);
votationApp0.addVotation(votation1);
votationApp0.showVotations();
