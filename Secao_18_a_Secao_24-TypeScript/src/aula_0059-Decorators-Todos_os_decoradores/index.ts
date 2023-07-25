// Tipo do construtor da classe
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
type Constructor = new (...args: any[]) => any;

// Classes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classDecorator(construtor: Constructor): any {
  // Chamado na criação da classe
  console.log('CLASSE');
  console.log(construtor);
  console.log('###\n');

  // Retorno pode ser omitido
  return class extends construtor {
    // faça o que desejar
  };
}

// Método de instância (normal)
function methodDecorator(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classPrototype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO NORMAL');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###\n');

  // Retorno pode ser omitido
  return {
    // value altera o retorno original:
    // value: (...args: any[]) => console.log(args),
    writable: true,
    enumerable: true,
    configurable: true,
  };
}

// Método estático
function staticMethodDecorator(
  classConstructor: Constructor,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###\n');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Parâmetro de método
function decoratorParameterMethod(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classPrototype: any,
  methodName: string,
  propertyIndex: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação do método
  console.log('PARÂMETRO DE MÉTODO');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###\n');

  // Retorno é ignorado
}

// Parâmetro de método estático
function decoratorParameterMethodStatic(
  classConstructor: Constructor,
  methodName: string,
  propertyIndex: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###\n');

  // Retorno é ignorado
}

// Propriedade
function decoradorDePropriedade(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classPrototype: any,
  propertyName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação da propriedade
  console.log('DECORADOR DE PROPRIEDADE');
  console.log(classPrototype);
  console.log(propertyName);
  console.log('###\n');

  // Retorno pode ser omitido
  // Use get e set para manipular o value da propriedade
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let propertyValue: any;
  return {
    enumerable: true,
    configurable: true,
    get: () => propertyValue,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

// Propriedade estática
function staticPropertyDecorator(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classConstructor: any,
  propertyName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação da propriedade estática
  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(propertyName);
  console.log('###\n');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter
function decoradorGetterSetterNormal(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classPrototype: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal');
  console.log(classPrototype);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###\n');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter estático
function decoradorGetterSetterStatic(
  classConstructor: Constructor,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER estático');
  console.log(classConstructor);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###\n');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// A classe e o uso dos decorators

@classDecorator
export class OnePerson {
  @decoradorDePropriedade
  name: string;
  lastname: string;
  age: number;

  @staticPropertyDecorator
  static staticProperty = 'VALOR PROPRIEDADE ESTÁTICA';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @methodDecorator
  method(@decoratorParameterMethod msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  @staticMethodDecorator
  static staticMethod(
    @decoratorParameterMethodStatic msg: string,
  ): string {
    return OnePerson.staticProperty + ' - ' + msg;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastname;
  }

  @decoradorGetterSetterNormal
  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }

  @decoradorGetterSetterStatic
  static get staticPropertyGetterSetter(): string {
    return OnePerson.staticProperty;
  }

  static set staticPropertyGetterSetter(value: string) {
    OnePerson.staticProperty = value;
  }
}

// Uso da classe

const person = new OnePerson('Luiz', 'Otávio', 30);
person.fullName = 'João Silva Oliveira';
const method = person.method('Olá mundo!');
const staticMethod = OnePerson.staticMethod('Olá mundo!');
console.log(person);
console.log(method);
console.log(staticMethod);
console.log(OnePerson.staticProperty);
