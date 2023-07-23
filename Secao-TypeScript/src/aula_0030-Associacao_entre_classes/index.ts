export class Writer {

  private _tool: Tool | null = null;

  constructor(private _name: string) { }

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get name(): string {
    return this._name;
  }

  public toWriter(): void {
    if (this.tool === null) {
      console.log('Não é possível escrever sem uma ferramenta!');
      return;
    }

    this.tool.toWriter();
  }
}

export abstract class Tool {

  constructor(private _name: string) { }

  public abstract toWriter(): void;

  public get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  toWriter(): void {
    console.log(`${this.name} está escrevendo...`);
  };
}

export class Typewriter extends Tool {
  toWriter(): void {
    console.log(`${this.name} está digitando...`);
  };
}

const writer = new Writer('Leonardo');
const pen = new Pen('Bic');
const typewriter = new Typewriter('Um modelo qualquer');

console.log(writer.name);
console.log(pen.name);
console.log(typewriter.name);

writer.toWriter();

writer.tool = pen;
writer.toWriter();

writer.tool = typewriter;
writer.toWriter();

writer.tool = null;
writer.toWriter();
