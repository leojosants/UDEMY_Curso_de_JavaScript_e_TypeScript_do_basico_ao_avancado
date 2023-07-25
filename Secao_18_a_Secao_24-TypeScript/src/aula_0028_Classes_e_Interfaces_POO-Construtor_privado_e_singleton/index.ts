export class Database {

  private static database: Database;

  private constructor(
    // eslint-disable-next-line no-unused-vars
    private host: string,

    // eslint-disable-next-line no-unused-vars
    private user: string,

    // eslint-disable-next-line no-unused-vars
    private password: string,
  ) { }

  public connect(): void {
    console.log(`Conectado: ${this.host},${this.user},${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada!');
      return Database.database;
    }
    console.log('Criando nova instância!');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
console.log();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect()
console.log();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect()
console.log();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect()

